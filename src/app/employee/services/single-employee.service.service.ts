import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {ApiEndpoints} from "../../shared/commons/api-endpoints.resource";
import {IEmployeeTable} from "../models/employee-table.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SingleEmployeeService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });
  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {
  }

  getEmployeeDetails(id:number){
    return this.http.get<IEmployeeTable>(this.apiEndpoints.EMPLOYEES.FETCH_DETAILS(id,this.auth.getCompanyCode()), {headers:this.headers});

  }

  createEmployee( employee: IEmployeeTable,cmedID:number,role:string ):Observable <IEmployeeTable> {
    return this.http.post<IEmployeeTable>(this.apiEndpoints.EMPLOYEES.CREATE_NEW_EMPLOYEE(this.auth.getCompanyCode(),cmedID,role,this.auth.getCompanyCode()), employee, {headers:this.headers});

  }


}
