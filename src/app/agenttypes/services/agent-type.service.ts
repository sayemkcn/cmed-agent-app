import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {IAgentTypePage} from '../models/agenttype-page.model';
import {Observable} from 'rxjs';
import {IAgentType} from '../models/agenttype.model';

@Injectable({
  providedIn: 'root'
})
export class AgentTypeService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {
  }

  getAgentTypes(): Observable<IAgentTypePage> {
    return this.http.get<IAgentTypePage>(this.apiEndpoints.AGENT_TYPES.FETCH, {headers: this.headers});
  }

  createAgentType(agentType: IAgentType): Observable<IAgentType> {
    return this.http.post<IAgentType>(this.apiEndpoints.AGENT_TYPES.CREATE, agentType, {headers: this.headers});
  }

  getAgentType(id: number) {
    return this.http.get<IAgentType>(this.apiEndpoints.AGENT_TYPES.FETCH_DETAILS(id), {headers: this.headers});
  }
}
