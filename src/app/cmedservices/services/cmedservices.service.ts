import {Injectable} from '@angular/core';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICmedService} from '../models/cmedservice.model';

@Injectable({
  providedIn: 'root'
})
export class CmedServicesService {

  constructor(private apiEndpoint: ApiEndpoints, private auth: AuthService, private http: HttpClient) {
  }

  getServices(): Observable<ICmedService[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.auth.getAccessToken()
    });
    return this.http.get<ICmedService[]>(this.apiEndpoint.SERVICES.FETCH, {headers});
  }

}
