import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  private title: string="Register Employee";
  selectedFile;
  private bloodGroup: Array<any>;
  private division: Array<any>;
  private employeeDetails;
  private submitted= false;

  constructor(private router: Router,private route: ActivatedRoute,private employeeDetailsService:SingleEmployeeService,
              private auth: AuthService,private toastr: Toastr) {
    super(auth);

  }

  updateEmployeeInformationForm = new FormGroup({
      id : new FormControl(''),
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      created_at : new FormControl('', Validators.required),
      phoneNumber : new FormControl('', Validators.required),
      email : new FormControl(''),
      last_check_up : new FormControl(''),
      date_of_birth : new FormControl(''),
      companyEmployeeId : new FormControl(''),
      department : new FormControl(''),
      unit : new FormControl(''),
      companyJobTitle : new FormControl(''),
      gender : new FormControl(''),
      bloodGroup : new FormControl(''),
      address : new FormGroup({
        id: new FormControl(''),
        street: new FormControl(''),
        region: new FormControl(''),
        city: new FormControl(''),
        postCode: new FormControl(''),
        districtStr: new FormControl(''),
        countryCode: new FormControl(''),
        created_at: new FormControl(''),
        updated_at: new FormControl('')
      }),


      // division : new FormControl(),
      // district : new FormControl(),
      // thana : new FormControl(),
      selfDiabetes : new FormControl(''),
      selfHyperTension : new FormControl(''),
  });


  ngOnInit() {
    this.bloodGroup = [{value: 'A+', label: 'A+'}, {value: 'B+', label: 'B+'}, {value: 'O+', label: 'O+'}, {
      value: 'AB+', label: 'AB+'}, {value: 'A-', label: 'A-'}, {value: 'B-', label: 'B-'}, {value: 'O-', label: 'O-'},
      {value: 'AB-', label: 'AB-'}];

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




    // this.updateEmployeeInformationForm = new FormGroup({
    //   id: id,
    //   firstName: firstName,
    //   lastName: lastName,
    //   created_at: registeredDate,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   last_check_up: lastCheckUp,
    //   date_of_birth: dateOfBirth,
    //   companyEmployeeId: employeeId,
    //   department: department,
    //   unit: unit,
    //   companyJobTitle: jobTitle,
    //   gender: gender,
    //   bloodGroup: bloodGroup,
    //   address: address,
    //   division: division,
    //   district: district,
    //   thana: thana,
    //   selfDiabetes: selfDiabetes,
    //   selfHyperTension: selfHyperTension
    //
    // });
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      this.title="Employee Information";

    }

    if(paramId){
      console.log(paramId);
      this.employeeDetailsService.getEmployeeDetails(parseInt(paramId,0)).subscribe(
        employeeInfo=>{ this.employeeDetails=employeeInfo;
        }, err=> this.handleError(err));
    }
    else{

    }

  }

  get f() {return this.updateEmployeeInformationForm.controls;}

  createEmployee(value:any){
    this.submitted =true;
    if(this.updateEmployeeInformationForm.invalid){
      return;
    }

    this.title="Register Employee";
    const employeeInfo= value as IEmployeeTable;

    console.log(employeeInfo);

    this.employeeDetailsService.createEmployee(employeeInfo,employeeInfo.id,"user").subscribe(at=>{
      this.toastr.success("Success", at.firstName+" was Registered successfully");
      this.router.navigate(['/employees']);
    })


  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

}
