import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserAuth} from '../models/user_auth.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login() {
    const userAuth: Observable<IUserAuth> = this.http.post<IUserAuth>(this.getLoginUrl('01710226163', '01710226163'), null);
    userAuth.subscribe(auth => console.log(auth));
  }

  getLoginUrl(username: string, password: string): string {
    return environment.base_url + '/oauth/token?client_id=android-client&client_secret=android-secret&grant_type=password' +
      '&username=' + username + '&password=' + password;
  }
}
