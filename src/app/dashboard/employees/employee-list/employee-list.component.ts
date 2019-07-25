import { Component, OnInit } from '@angular/core';
import {EmployeeModule} from "../../models/employee.module";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public totalEmployees = 0;

  public employees = [new EmployeeModule("Nazmul Arif","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male")];

  constructor() { }

  ngOnInit() {
  }

}
