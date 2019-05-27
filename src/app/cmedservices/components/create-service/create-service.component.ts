import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ICmedService} from '../../models/cmedservice.model';
import {CmedServicesService} from '../../services/cmedservices.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Toastr} from '../../../shared/services/toastr.service';
import {Observable} from 'rxjs';

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
              private toastr: Toastr,
              private route: ActivatedRoute) {
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

    // Edit service
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const exService: Observable<ICmedService> = this.cmedServicesService.getService(parseInt(paramId, 0));
      exService.subscribe(es => {
        id.setValue(es.id);
        name.setValue(es.name);
        description.setValue(es.description);
        cost.setValue(es.cost);
        serviceTypeId.setValue(es.service_type_id);
      }, err => this.handleError(err));
    }
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
