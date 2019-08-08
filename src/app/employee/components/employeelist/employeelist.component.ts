import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/shared/auth.service";
import {EmployeeService} from "../../services/employee.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {IEmployeePage} from "../../models/employee-page.model";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
  providers:[DatePipe]
})
export class EmployeelistComponent extends BaseComponent implements OnInit {

   employeePage: IEmployeePage;
   gender='';
  //  queryCode;
   page=0;
   search='';

   genderArra=[{value: 'm', label: 'Male'}, {value: 'f', label: 'Female'}, {value: 'u', label: 'Other'}];

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

  }
  onPaginateChange(data){
    if(data.hasNextPage()){
        data.nextPage();
    }
    if(data.hasPreviousPage()){
      data.previousPage();
    }
  }



}
