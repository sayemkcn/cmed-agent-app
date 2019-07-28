import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  updateEmployeeInformationForm: FormGroup;
  title: string="Register Employee";


  constructor(private router: Router,
              private route: ActivatedRoute,) {

  }

  ngOnInit() {
    const id= new FormControl();
    const firstName = new FormControl();
    const lastName=new FormControl();
    const registeredDate=new FormControl();
    const phoneNumber=new FormControl();
    const email=new FormControl();
    const lastCheckUp=new FormControl();
    const dateOfBirth=new FormControl();
    const employeeId=new FormControl();
    const department=new FormControl();
    const unit=new FormControl();
    const jobTitle=new FormControl();
    const gender=new FormControl();
    const bloodGroup=new FormControl();
    const address=new FormControl();
    const division=new FormControl();
    const district=new FormControl();
    const thana=new FormControl();
    const isDiabetic=new FormControl();
    const isHypertensive=new FormControl();

    this.updateEmployeeInformationForm=new FormGroup({
      id: id,
      first_name: firstName,
      last_name: lastName,
      registered_date: registeredDate,
      phone_number: phoneNumber,
      email: email,
      last_check_up: lastCheckUp,
      date_of_birth:dateOfBirth,
      employee_id: employeeId,
      department:department,
      unit:unit,
      job_title:jobTitle,
      gender:gender,
      blood_group:bloodGroup,
      address:address,
      division:division,
      district:district,
      thana:thana,
      is_diabetic:isDiabetic,
      is_hypertensive:isHypertensive

    })
    const paramId = this.route.snapshot.paramMap.get('id');

  }

}
