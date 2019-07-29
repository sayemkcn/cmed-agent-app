import { Injectable } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {Observable} from 'rxjs';
import {IemployeeList} from "../models/iemployee-list";




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });
  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {

  }

  getEmployees(): Observable<IemployeeList> {
    return this.http.get<IemployeeList>(this.apiEndpoints.AGENTS.FETCH, {headers: this.headers});
  }

  getEmployeeDetails(id: number): Observable<IemployeeList> {
    return this.http.get<IemployeeList>(this.apiEndpoints.AGENTS.FETCH_DETAILS(id), {headers: this.headers});
  }
  registerEmployee(employee: IemployeeList): Observable<IemployeeList> {
    return this.http.post<IemployeeList>(this.apiEndpoints.AGENTS.CREATE, employee, {headers: this.headers});
  }
  refillEmployee(employeeId: number, dept: number): Observable<any> {
    return this.http.post<any>(this.apiEndpoints.AGENTS.REFILL(employeeId, dept), null, {headers: this.headers});
  }

}
