import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ICmedService} from '../../models/cmedservice.model';
import {CmedServicesService} from '../../services/cmedservices.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {Router} from '@angular/router';
import {Toastr} from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent extends BaseComponent implements OnInit {
  createServiceForm: FormGroup;

  constructor(private cmedServicesService: CmedServicesService,
              private auth: AuthService,
              private router: Router,
              private toastr: Toastr) {
    super(auth);
  }

  ngOnInit() {
    const id = new FormControl();
    const name = new FormControl();
    const description = new FormControl();
    const cost = new FormControl();
    const serviceTypeId = new FormControl();
    this.createServiceForm = new FormGroup({
      id,
      name,
      description,
      cost,
      service_type_id: serviceTypeId
    });
  }

  createService(value: any) {
    const cService = value as ICmedService;
    this.cmedServicesService.createService(cService)
      .subscribe(s => {
        this.toastr.success('Success!', 'Successfully created service: ' + s.name);
        this.router.navigate(['/services']);
      }, err => this.handleError(err));
  }
}
