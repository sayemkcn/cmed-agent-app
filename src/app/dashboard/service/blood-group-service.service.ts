import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {ApiEndpoints} from "../../shared/commons/api-endpoints.resource";
import {Observable} from "rxjs";
import {IBloodGroup} from "../models/blood-group.model";


@Injectable({
  providedIn: 'root'
})
export class BloodGroupServiceService {
  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {

  }

    getBloodGroups(code:string): Observable<IBloodGroup> {
    return this.http.get<IBloodGroup >(this.apiEndpoints.BLOOD_GROUP.FETCH(code), {headers: this.headers});
  }


}
