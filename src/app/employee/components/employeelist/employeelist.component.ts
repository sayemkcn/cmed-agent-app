import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/shared/auth.service";
import {EmployeeService} from "../../services/employee.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {IEmployeePage} from "../../models/employee-page.model";


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent extends BaseComponent implements OnInit {

  private employeePage: IEmployeePage;
  private gender='m';
  // private queryCode;
  private page=0;
  private search='Arif';

  private genderArra=['m','f','u'];

  constructor(private employeeService: EmployeeService, private auth: AuthService) {
    super(auth);
  }

  ngOnInit():void {
    this.employeeService.getEmployees(this.auth.getCompanyCode(),this.search,this.gender,this.page).subscribe(searchVar=>{
      this.employeePage=searchVar;
    }, err=>this.handleError(err) )
  }

  searchEmployee(){
    if(this.search!='' || this.gender !='') {
      this.employeeService.getEmployees(this.auth.getCompanyCode(), this.search, this.gender, this.page).subscribe(searchVar => {
        this.employeePage = searchVar;
      }, err => this.handleError(err))
    }
    // this.search='';
    // this.gender='';
  }



}
