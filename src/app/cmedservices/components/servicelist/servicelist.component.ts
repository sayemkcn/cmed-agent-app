import {Component, OnInit} from '@angular/core';
import {ICmedService} from '../../models/cmedservice.model';
import {CmedServicesService} from '../../services/cmedservices.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.scss']
})
export class ServiceListComponent extends BaseComponent implements OnInit {
  services: ICmedService[] = [];

  constructor(private cmedServicesService: CmedServicesService, private auth: AuthService) {
    super(auth);
  }

  ngOnInit() {
    this.cmedServicesService.getServices().subscribe(serv => {
      this.services = serv;
    }, err => this.handleError(err));
  }

}
