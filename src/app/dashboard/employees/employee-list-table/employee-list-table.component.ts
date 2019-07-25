import { Component, OnInit } from '@angular/core';
import {EmployeeModule} from "../../models/employee.module";

@Component({
  selector: 'app-employee-list-table',
  templateUrl: './employee-list-table.component.html',
  styleUrls: ['./employee-list-table.component.scss']
})
export class EmployeeListTableComponent implements OnInit {

  public  employees = [
    new EmployeeModule("Sakib Abrar Hossain","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Syed Mostofa Monsur","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
