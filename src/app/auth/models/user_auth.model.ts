import {IAuthority} from './authority.model';

export interface IUserAuth {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  name: string;
  cmedId: string;
  company_code?:string,
  authorities: IAuthority[];
}
