import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SingleEmployeeService} from "../../services/single-employee.service.service";
import {AuthService} from "../../../auth/shared/auth.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {IEmployeeTable} from "../../models/employee-table.model";
import {Toastr} from "../../../shared/services/toastr.service";
import {Observable} from "rxjs";
import DevExpress from "devextreme/bundles/dx.all";
import add = DevExpress.viz.map.projection.add;
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  providers:[DatePipe]
})
export class CreateEmployeeComponent extends BaseComponent implements OnInit {

  private title: string = "Register Employee";
  selectedFile;
  private bloodGroup: Array<any>;
  private district: Array<any>;
  private policeStation: Array<any>;
  private division: Array<any>;
  private employeeDetails;
  private paramId;
  private submitted = false;
  updateEmployeeInformationForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private employeeDetailsService: SingleEmployeeService,
              private auth: AuthService, private toastr: Toastr, private fb: FormBuilder) {
    super(auth);

  }

  // initControls(): void {
  //   this.updateEmployeeInformationForm = new FormGroup({
  //     id: new FormControl(''),
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     created_at: new FormControl(''),
  //     phoneNumber: new FormControl(''),
  //     email: new FormControl(''),
  //     updated_at: new FormControl(''),
  //     birthday: new FormControl(''),
  //     companyEmployeeId: new FormControl(''),
  //     department: new FormControl(''),
  //     unit: new FormControl(''),
  //     companyJobTitle: new FormControl(''),
  //     gender: new FormControl(''),
  //     bloodGroup: new FormControl(''),
  //
  //     address: new FormGroup({
  //       id: new FormControl(''),
  //       street: new FormControl(''),
  //       region: new FormControl(''),
  //       city: new FormControl(''),
  //       postCode: new FormControl(''),
  //       districtStr: new FormControl(''),
  //       countryCode: new FormControl('')
  //     }),
  //
  //     last_check_up: new FormControl(''),
  //     selfDiabetes: new FormControl(''),
  //     selfHyperTension: new FormControl(''),
  //   });
  // }

  ngOnInit() {

      const id= new FormControl('');
      const firstName= new FormControl('');
      const lastName= new FormControl('');
      const registered_date= new FormControl('');
      const phoneNumber= new FormControl('');
      const email= new FormControl('');
      const birthday= new FormControl('');
      const companyEmployeeId= new FormControl('');
      const department= new FormControl('');
      const unit= new FormControl('');
      const companyJobTitle= new FormControl('');
      const gender= new FormControl('');

      const bloodGroup= new FormControl('');
      const street= new FormControl('');
      const region= new FormControl('');
      const city= new FormControl('');
      const postCode= new FormControl('');
      const districtStr= new FormControl('');
      const countryCode= new FormControl('');
      const address = this.fb.group({
          id,
          street,
          region,
          city,
          postCode,
          districtStr,
          countryCode
        });

      const last_check_up= new FormControl('');
      const selfDiabetes= new FormControl('');
      const selfHyperTension= new FormControl('');

      this.updateEmployeeInformationForm =this.fb.group({
        id,
        firstName,
        lastName,
        registered_date,
        phoneNumber,
        email,
        birthday,
        companyEmployeeId,
        department,
        unit,
        companyJobTitle,
        gender,
        bloodGroup,
        address,
        last_check_up,
        selfDiabetes,
        selfHyperTension

      });



    this.title ="Register Employee";
    // this.initControls();
    this.bloodGroup = [{value: 'A+', label: 'A+'}, {value: 'B+', label: 'B+'}, {value: 'O+', label: 'O+'}, {
      value: 'AB+', label: 'AB+'
    }, {value: 'A-', label: 'A-'}, {value: 'B-', label: 'B-'}, {value: 'O-', label: 'O-'},
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




    this.paramId = this.route.snapshot.paramMap.get('id');
    // if (this.paramId) {
    //   this.title = "Employee Information";
    //
    // }

    if (this.paramId) {
      this.title="Employee Information";
      const prevData: Observable<IEmployeeTable> = this.employeeDetailsService.getEmployeeDetails(parseInt(this.paramId,0));
      prevData.subscribe(pd=>{
        id.setValue(pd.id);

        console.log((this.paramId) + 'dd');

        firstName.setValue(pd.firstName);
        lastName.setValue(pd.lastName);
        phoneNumber.setValue(pd.phoneNumber);
        email.setValue(pd.email);
        registered_date.setValue(pd.dateOfConception);
        birthday.setValue(pd.birthday);
        companyEmployeeId.setValue(pd.companyEmployeeId);
        companyJobTitle.setValue(pd.companyJobTitle);
        gender.setValue(pd.gender);
        bloodGroup.setValue(pd.bloodGroup);

        address.controls['id'].setValue(pd.address.id);
        address.controls['street'].setValue(pd.address.street);
        address.controls['region'].setValue(pd.address.region);
        address.controls['city'].setValue(pd.address.city);
        address.controls['postCode'].setValue(pd.address.postCode);
        address.controls['districtStr'].setValue(pd.address.districtStr);
        address.controls['countryCode'].setValue(pd.address.countryCode);

        last_check_up.setValue(pd.healthCardIssueDate);
        selfDiabetes.setValue(pd.selfDiabetes);
        selfHyperTension.setValue(pd.selfHyperTension);

      })



      // this.employeeDetailsService.getEmployeeDetails(parseInt(this.paramId, 0)).subscribe(
      //   employeeInfo => {
      //     this.employeeDetails = employeeInfo;
      //   }, err => this.handleError(err));
    }

  }

  get f() {
    return this.updateEmployeeInformationForm.controls;
  }

  createEmployee(value: any) {

    // console.log(value.id);
    value.id = this.paramId;
    // console.log(JSON.stringify(value));

    this.title = "Register Employee";
    const employeeInfo = value as IEmployeeTable;


    this.employeeDetailsService.createEmployee(employeeInfo, employeeInfo.phoneNumber, "user", employeeInfo.phoneNumber).subscribe(at => {
      this.toastr.success("Success", at.firstName + " was Registered successfully");
      this.router.navigate(['/employees']);
    })

  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  goBack() {
    this.router.navigate(['/employees']);
  }

  isUpdate(): boolean {
    return this.paramId !== undefined && this.paramId != null;
  }
}
