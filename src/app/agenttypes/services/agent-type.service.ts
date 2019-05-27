import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {IAgentTypePage} from '../models/agenttype-page.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentTypeService {

  constructor(private auth: AuthService, private http: HttpClient, private apiEndpoints: ApiEndpoints) {
  }

  getAgentTypes(): Observable<IAgentTypePage> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.auth.getAccessToken()
    });
    return this.http.get<IAgentTypePage>(this.apiEndpoints.AGENT_TYPES.FETCH, {headers});
  }

}
