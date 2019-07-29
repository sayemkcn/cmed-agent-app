import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {ApiEndpoints} from "../../shared/commons/api-endpoints.resource";
import {Observable} from "rxjs";
import {Statistics} from "../models/statistics";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {

  }
  getStatistics(fromDate:string,tooDate:string): Observable<Statistics> {
    return this.http.get<Statistics>(this.apiEndpoints.STATISTICS.FETCH("cmed",fromDate,tooDate), {headers: this.headers});
  }

}
