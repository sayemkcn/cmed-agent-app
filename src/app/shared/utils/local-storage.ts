import {IUserAuth} from '../../auth/models/user_auth.model';

export class LocalStorage {

  public static KEYS: any = {
    clientId: '*&^%&%frgter^87i5',
    clientSecret: 'V%$#reg%786v*7i6',
    accessToken: 'B57UB5&ehyr&5b&*6',
    refreshToken: 'INB*gege&U4^345%36^5u',
    authorities: 'BUegeg&v3$76u%^&*',
    username: 'B^4^3&tertre',
    companyCode:'er4647y5ehtrytg'
  };

  constructor() {
  }

  static put(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  static retrive(key: string) {
    console.log(sessionStorage.getItem(key));
    return sessionStorage.getItem(key);
  }

  static putAuth(userAuth: IUserAuth) {
    sessionStorage.setItem(this.KEYS.username, userAuth.cmedId);
    sessionStorage.setItem(this.KEYS.accessToken, userAuth.access_token);
    sessionStorage.setItem(this.KEYS.refreshToken, userAuth.refresh_token);
    sessionStorage.setItem(this.KEYS.companyCode, userAuth.company_code);
    sessionStorage.setItem(this.KEYS.authorities, JSON.stringify(userAuth.authorities));
  }

  static clear(): void {
    sessionStorage.clear();
    // sessionStorage.removeItem(this.KEYS.username);
    // sessionStorage.removeItem(this.KEYS.accessToken);
    // sessionStorage.removeItem(this.KEYS.refreshToken);
    // sessionStorage.removeItem(this.KEYS.companyCode);
    // sessionStorage.removeItem(this.KEYS.authorities);
  }
}
