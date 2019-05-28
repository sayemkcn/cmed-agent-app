import {Injectable} from '@angular/core';
import {IUserPage} from '../models/user-page.model';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/shared/auth.service';
import {ApiEndpoints} from '../../shared/commons/api-endpoints.resource';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + this.auth.getAccessToken()
  });

  constructor(private auth: AuthService, private apiEndpoints: ApiEndpoints, private  http: HttpClient) {
  }


  searchUsers(query: string, page: number): Observable<IUserPage> {
    return this.http.get<IUserPage>(this.apiEndpoints.USERS.SEARCH(query, page), {headers: this.headers});
  }
}
