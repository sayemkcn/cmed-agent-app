import {IUserAuth} from '../../auth/models/user_auth.model';

export class LocalStorage {

  public static KEYS: any = {
    clientId: '*&^%&%frgter^87i5',
    clientSecret: 'V%$#reg%786v*7i6',
    accessToken: 'B57UB5&ehyr&5b&*6',
    refreshToken: 'INB*gege&U4^345%36^5u',
    authorities: 'BUegeg&v3$76u%^&*',
    username: 'B^4^3&tertre'
  };

  constructor() {
  }

  static put(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static retrive(key: string) {
    return localStorage.getItem(key);
  }

  static putAuth(userAuth: IUserAuth) {
    localStorage.setItem(this.KEYS.accessToken, userAuth.access_token);
    localStorage.setItem(this.KEYS.refreshToken, userAuth.refresh_token);
    localStorage.setItem(this.KEYS.authorities, JSON.stringify(userAuth.authorities));
    localStorage.setItem(this.KEYS.username, userAuth.cmedId);
  }

  static clear(): void {
    localStorage.removeItem(this.KEYS.username);
    localStorage.removeItem(this.KEYS.accessToken);
    localStorage.removeItem(this.KEYS.refreshToken);
    localStorage.removeItem(this.KEYS.clientId);
    localStorage.removeItem(this.KEYS.clientSecret);
  }
}
