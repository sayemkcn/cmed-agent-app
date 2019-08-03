import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SingleEmployeeService} from "../../services/single-employee.service.service";
import {AuthService} from "../../../auth/shared/auth.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {IEmployeeTable} from "../../models/employee-table.model";
import {Toastr} from "../../../shared/services/toastr.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent extends BaseComponent implements OnInit {
  updateEmployeeInformationForm: FormGroup;
  private title: string="Register Employee";
  selectedFile;
  private bloodGroup: Array<any>;
  private division: Array<any>;

  constructor(private router: Router,private route: ActivatedRoute,private employeeDetailsService:SingleEmployeeService,
              private auth: AuthService,private toastr: Toastr) {
    super(auth);

  }

  ngOnInit() {
    this.bloodGroup = [{value: '1', label: 'A+'}, {value: '2', label: 'B+'}, {value: '3', label: 'O+'}, {
      value: '4',
      label: 'AB+'
    },
      {value: '5', label: 'A-'}, {value: '6', label: 'B-'}, {value: '7', label: 'O-'}, {value: '8', label: 'AB-'}
    ];
    this.division = [
      {value: '1', label: 'Dhaka'},
      {value: '2', label: 'Chattagram'},
      {value: '3', label: 'Khulna'},
      {value: '4', label: 'Barisal'},
      {value: '5', label: 'Mymensingh'},
      {value: '6', label: 'Rajshahi'},
      {value: '7', label: 'Rangpur'},
      {value: '8', label: 'Sylhet'}
    ];


    const id = new FormControl();
    const firstName = new FormControl();
    const lastName = new FormControl();
    const registeredDate = new FormControl();
    const phoneNumber = new FormControl();
    const email = new FormControl();
    const lastCheckUp = new FormControl();
    const dateOfBirth = new FormControl();
    const employeeId = new FormControl();
    const department = new FormControl();
    const unit = new FormControl();
    const jobTitle = new FormControl();
    const gender = new FormControl();
    const bloodGroup = new FormControl();
    const address = new FormControl();
    const division = new FormControl();
    const district = new FormControl();
    const thana = new FormControl();
    const selfDiabetes = new FormControl();
    const selfHyperTension = new FormControl();

    this.updateEmployeeInformationForm = new FormGroup({
      id: id,
      firstName: firstName,
      lastName: lastName,
      created_at: registeredDate,
      phoneNumber: phoneNumber,
      email: email,
      last_check_up: lastCheckUp,
      date_of_birth: dateOfBirth,
      companyEmployeeId: employeeId,
      department: department,
      unit: unit,
      companyJobTitle: jobTitle,
      gender: gender,
      bloodGroup: bloodGroup,
      address: address,
      division: division,
      district: district,
      thana: thana,
      selfDiabetes: selfDiabetes,
      selfHyperTension: selfHyperTension

    });
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      this.title="Employee Information";

    }

    if(paramId){
      console.log(id);
      this.employeeDetailsService.getEmployeeDetails(parseInt(paramId,0)).subscribe(
        employeeDetails=>{ id.setValue(employeeDetails.id);
            id.setValue(employeeDetails.firstName);
            id.setValue(employeeDetails.lastName);
            id.setValue(employeeDetails.created_at);
            id.setValue(employeeDetails.email);
            id.setValue(employeeDetails.phoneNumber);
            // id.setValue(employeeDetails.dateOfConception);
            id.setValue(employeeDetails.companyEmployeeId);
            id.setValue(employeeDetails.companyJobTitle);
            id.setValue(employeeDetails.gender);
            id.setValue(employeeDetails.bloodGroup);
            id.setValue(employeeDetails.birthday);
            //
            // id.setValue(employeeDetails.address.city);
            // id.setValue(employeeDetails.address.street);
            // id.setValue(employeeDetails.address.region);
            // id.setValue(employeeDetails.address.postCode);
            // id.setValue(employeeDetails.address.districtStr);

            // id.setValue(employeeDetails.selfDiabetes);
            // id.setValue(employeeDetails.selfHyperTension);
        }, err=> this.handleError(err));
    }

  }

  createEmployee(value:any){
    this.title="Register Employee";
    const employeeInfo= value as IEmployeeTable;
    console.log(employeeInfo);

    this.employeeDetailsService.createEmployee(employeeInfo).subscribe(at=>{
      this.toastr.success("Success", at.firstName+" was Registered successfully");
      this.router.navigate(['/employees']);
    })


  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

}
