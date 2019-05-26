import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserAuth} from '../models/user_auth.model';
import {environment} from '../../../environments/environment';
import {Toastr} from '../../shared/toastr.service';
import {Router} from '@angular/router';
import {LocalStorage} from '../../utils/local-storage';
import {IAuthority} from '../models/authority.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toastr: Toastr, private router: Router) {
  }

  public static isAdmin(): boolean {
    const a: string = LocalStorage.retrive(LocalStorage.KEYS.authorities);
    const authorities: IAuthority[] = JSON.parse(a);
    if (authorities == null) {
      return false;
    }
    return authorities
      .filter(au => au.authority === 'ROLE_ADMIN')
      .length > 0;
  }

  canActivate(): boolean {
    const loggedIn: boolean = this.isLoggedIn();

    if (loggedIn === false) {
      this.toastr.error('You are logged out', 'Please login to continue!');
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }

  isLoggedIn(): boolean {
    return LocalStorage.retrive(LocalStorage.KEYS.accessToken) != null;
  }

  logout(): void {
    LocalStorage.clear();
    this.toastr.warning('You\'ve been logged out!', 'Please login to continue.');
    this.router.navigate(['/login']);
  }


  login(username: string, password: string) {

    const loginUrl: string = this.getLoginUrl(username, password);
    const userAuth: Observable<IUserAuth> = this.http.post<IUserAuth>(loginUrl, null);
    userAuth.subscribe((auth: IUserAuth) => {
      LocalStorage.putAuth(auth);
      this.toastr.success('Success', 'Successfully logged in!');
      this.router.navigate(['/']);
      // window.location.href = '/';
    });
  }

  refreshToken() {
    const userAuth: Observable<IUserAuth> = this.http.post<IUserAuth>(this.getRefreshTokenUrl(), null);
    userAuth.subscribe((auth: IUserAuth) => {
      LocalStorage.putAuth(auth);
      this.router.navigate(['/']);
      // this.toastr.success("Refresh Token","Token has been refreshed!");
    }, err => this.logout());
  }

  getUsername(): string {
    return LocalStorage.retrive(LocalStorage.KEYS.username) as string;
  }

  getAccessToken(): string {
    return LocalStorage.retrive(LocalStorage.KEYS.accessToken) as string;
  }

  getRefreshToken(): string {
    return LocalStorage.retrive(LocalStorage.KEYS.refreshToken) as string;
  }

  getLoginUrl(username: string, password: string): string {
    return environment.base_url + '/oauth/token?grant_type=password&client_id='
      + environment.client_id + '&client_secret=' + environment.client_secret + '&username=' + username + '&password=' + password;
  }

  getRefreshTokenUrl(): string {
    return environment.base_url + '/oauth/token?grant_type=refresh_token&client_id='
      + environment.client_id + '&client_secret=' + environment.client_secret + '&refresh_token=' + this.getRefreshToken();
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
