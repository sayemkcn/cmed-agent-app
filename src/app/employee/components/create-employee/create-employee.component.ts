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

    this.bloodGroup = [{value: 'A+', label: 'A+'}, {value: 'B+', label: 'B+'}, {value: 'O+', label: 'O+'}, {
      value: 'AB+', label: 'AB+'
    }, {value: 'A-', label: 'A-'}, {value: 'B-', label: 'B-'}, {value: 'O-', label: 'O-'},
      {value: 'AB-', label: 'AB-'}];

    this.division = [
      {value: 'Dhaka', label: 'Dhaka'},
      {value: 'Chattagram', label: 'Chattagram'},
      {value: 'Khulna', label: 'Khulna'},
      {value: 'Barisal', label: 'Barisal'},
      {value: 'Mymensingh', label: 'Mymensingh'},
      {value: 'Rajshahi', label: 'Rajshahi'},
      {value: 'Rangpur', label: 'Rangpur'},
      {value: 'Sylhet', label: 'Sylhet'}
    ];




    this.paramId = this.route.snapshot.paramMap.get('id');
    if (this.paramId) {
      this.title="Employee Information";
      const prevData: Observable<IEmployeeTable> = this.employeeDetailsService.getEmployeeDetails(parseInt(this.paramId,0));
      prevData.subscribe(pd=>{
        id.setValue(pd.id);


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

    }
    else{
      this.title="Register Employee";
    }

  }

  // get f() {
  //   return this.updateEmployeeInformationForm.controls;
  // }

  createEmployee(value: any) {

    value.id = this.paramId;

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
