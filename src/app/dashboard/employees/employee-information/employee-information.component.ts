import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.scss']
})
export class EmployeeInformationComponent implements OnInit {

  updateEmployeeInformationForm: FormGroup;
  title: string="Register Employee";


  constructor() { }

  ngOnInit() {
    const first_name = new FormControl();
    const last_name=new FormControl();
    const registered_date=new FormControl();
    const phone_number=new FormControl();
    const email=new FormControl();
    const last_check_up=new FormControl();
    const employee_id=new FormControl();
    const department=new FormControl();
    const unit=new FormControl();
    const job_title=new FormControl();
    const gender=new FormControl();
    const blood_group=new FormControl();
    const address=new FormControl();
    const division=new FormControl();
    const district=new FormControl();
    const thana=new FormControl();
    const is_diabetic=new FormControl();
    const is_hypertensive=new FormControl();

    this.updateEmployeeInformationForm=new FormGroup({
      first_name,last_name,registered_date,phone_number,email, last_check_up,employee_id,department,unit,
      job_title,gender,blood_group,address,division,district,thana,is_diabetic,is_hypertensive

    })

  }

}
