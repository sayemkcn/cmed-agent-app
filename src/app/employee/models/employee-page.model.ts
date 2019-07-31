import {IEmployeeTable} from "./employee-table.model";

export interface IEmployeePage{
  content?:IEmployeeTable[],
  last?:boolean,
  totalElements?:number,
  totalPages?: number,
  numberOfElements?: number,
  first?:boolean,
  sort?:[{
    direction?:string,
    property?:string,
    ignoreCase?:boolean,
    nullHandling?:string,
    descending?: boolean,
    ascending?: boolean
  }],
  size?: number,
  number?:number
}
