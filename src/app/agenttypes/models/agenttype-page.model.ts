import {IAgentType} from './agenttype.model';

export interface IAgentTypePage {
  content: IAgentType[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
}
