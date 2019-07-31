import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {ApiEndpoints} from "../../shared/commons/api-endpoints.resource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class PatientInfoService {

  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {

  }
  getMeasurements(measurementType:string,fromDate:string,tooDate:string): Observable<Map<string,IStatusCount[]>> {
    return this.http.get< Map<string,IStatusCount[]> >(this.apiEndpoints.MEASUREMENTS.FETCH("cmed",measurementType,fromDate,tooDate), {headers: this.headers});
  }
}
