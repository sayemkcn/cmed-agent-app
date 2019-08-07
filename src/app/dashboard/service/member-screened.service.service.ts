import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {ApiEndpoints} from "../../shared/commons/api-endpoints.resource";
import {Observable} from "rxjs";
import {IScreened} from "../models/screened.model";

@Injectable({
  providedIn: 'root'
})
export class MemberScreenedService {
  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {

  }

  getScreened(): Observable<IScreened[]> {
    return this.http.get<IScreened[]>( this.apiEndpoints.MEMBER.FETCH( this.auth.getCompanyCode() ), {headers: this.headers} );
  }

}
