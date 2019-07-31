import { Injectable } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {Observable} from 'rxjs';
import {IEmployeePage} from "../models/employee-page.model";




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

  getEmployees( code:string, query:string, gender:string, page:number ): Observable<IEmployeePage> {
    return this.http.get<IEmployeePage>(this.apiEndpoints.EMPLOYEES.FETCH(code,query,gender,page), {headers: this.headers});
  }

}
