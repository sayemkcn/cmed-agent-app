import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import {DashboardRoutingModule} from "./employee-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [EmployeelistComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ]
})
export class EmployeeModule { }
