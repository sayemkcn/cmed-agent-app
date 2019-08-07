import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import {DashboardRoutingModule} from "./employee-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import {HttpModule} from '@angular/http';
import {MatPaginatorModule} from "@angular/material";

@NgModule({
  declarations: [EmployeelistComponent, CreateEmployeeComponent, PrescriptionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class EmployeeModule { }
