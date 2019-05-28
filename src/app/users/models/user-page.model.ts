import {IUser} from './user.model';

export interface IUserPage {
  content: IUser[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
}
