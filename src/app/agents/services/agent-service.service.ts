import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAgentPage} from '../models/agent-page.model';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {Observable} from 'rxjs';
import {IAgent} from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  const;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {
  }

  getAgents(): Observable<IAgentPage> {
    return this.http.get<IAgentPage>(this.apiEndpoints.AGENTS.FETCH, {headers: this.headers});
  }

  getAgentDetails(id: number): Observable<IAgent> {
    return this.http.get<IAgent>(this.apiEndpoints.AGENTS.FETCH_DETAILS(id), {headers: this.headers});
  }

  createAgents(agent: IAgent): Observable<IAgent> {
    return this.http.post<IAgent>(this.apiEndpoints.AGENTS.CREATE, agent, {headers: this.headers});
  }
}
