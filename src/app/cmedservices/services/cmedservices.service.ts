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

  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private apiEndpoint: ApiEndpoints, private auth: AuthService, private http: HttpClient) {
  }

  getServices(): Observable<ICmedService[]> {
    return this.http.get<ICmedService[]>(this.apiEndpoint.SERVICES.FETCH, {headers: this.headers});
  }

  createService(cmedService: ICmedService): Observable<ICmedService> {
    return this.http.post<ICmedService>(this.apiEndpoint.SERVICES.CREATE, cmedService, {headers: this.headers});
  }

  getService(paramId: number): Observable<ICmedService> {
    return this.http.get<ICmedService>(this.apiEndpoint.SERVICES.FETCH_DETAILS(paramId), {headers: this.headers});
  }
}

