import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule {
  public name;
  public id;
  public phone;
  public unit;
  public department;
  public jobTitle;
  public lastMeasured;
  public gender;


  constructor(name, id, phone, unit, department, jobTitle, lastMeasured, gender) {
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.unit = unit;
    this.department = department;
    this.jobTitle = jobTitle;
    this.lastMeasured = lastMeasured;
    this.gender = gender;
  }
}
