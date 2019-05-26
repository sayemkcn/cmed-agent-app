import {IAgent} from './agent.model';

export interface IAgentPage {
  content: IAgent[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
}
