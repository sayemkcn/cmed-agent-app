import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAgentPage} from '../models/agent-page.model';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {
  }

  getAgents(): Observable<IAgentPage> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.auth.getAccessToken()
    });
    return this.http.get<IAgentPage>(this.apiEndpoints.AGENTS.FETCH, {headers});
  }
}
