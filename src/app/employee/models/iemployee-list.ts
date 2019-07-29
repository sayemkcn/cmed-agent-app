import button from "devextreme/ui/button";

export interface IemployeeList {
  id: number;
  first_name: string;
  last_name: string;
  registered_date: Date;
  phone_number: number;
  email: string;
  last_check_up: Date;
  date_of_birth:Date;
  employee_id: number;
  department:string;
  unit:number;
  job_title:string;
  gender:string;
  blood_group:string;
  address:string;
  division:string;
  district:string;
  thana:string;
  is_diabetic:button;
  is_hypertensive:button
}
