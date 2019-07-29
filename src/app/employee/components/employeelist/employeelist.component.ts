import { Component, OnInit } from '@angular/core';
import {EmployeeModule} from "../../models/employee.module";
import {IemployeeList} from "../../models/iemployee-list";
import {AuthService} from "../../../auth/shared/auth.service";
import {EmployeeService} from "../../services/employee.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {FormControl, FormGroup} from "@angular/forms";
import {IUserPage} from "../../../users/models/user-page.model";
import {UserService} from "../../../users/services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../users/models/user.model";
import {FileServiceService} from "../../services/file-service.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent extends BaseComponent implements OnInit {
  private searchForm: FormGroup;
  private userPage: IUserPage;

  public  employees = [
    new EmployeeModule("Sakib Abrar Hossain","111213", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Syed Mostofa Monsur","111211", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111214", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111215", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111216", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111217", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111218", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111219", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "male"),
    new EmployeeModule("Nazmul Arif","111220", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
    new EmployeeModule("Nazmul Arif","111223", "01711881659", "Unit 1", "Dep 1", "Excecutive", "12 March 2019", "female"),
  ];

  employeeListTable: IemployeeList;
  private selectedUser: IUser;



  fileUrl;
  constructor(private employeeService: EmployeeService, private auth: AuthService,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private files: FileServiceService,
              private sanitizer: DomSanitizer
              ) {
    super(auth);
  }

  ngOnInit():void {
    this.selectedUser = null;
    this.initSearchForm();

    this.employeeService.getEmployees().subscribe(ap => {
      this.employeeListTable = ap;
    }, err => this.handleError(err));

    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  }



  private initSearchForm() {
    const search = new FormControl();
    this.searchForm = new FormGroup({
      search
    });
  }

  onChangeSearch($event: any) {
    console.log($event.target.value);
    this.userService.searchUsers($event.target.value, 0)
      .subscribe((up: IUserPage) => {
        console.log(up);
        this.userPage = up;
      }, err => this.handleError(err));
  }



}
