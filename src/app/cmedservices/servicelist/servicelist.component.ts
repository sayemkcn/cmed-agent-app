import {Component, OnInit} from '@angular/core';
import {ICmedService} from '../models/cmedservice.model';
import {CmedServicesService} from '../services/cmedservices.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.scss']
})
export class ServiceListComponent implements OnInit {
  private services: ICmedService[] = [];

  constructor(private cmedServicesService: CmedServicesService) {
  }

  ngOnInit() {
    this.cmedServicesService.getServices().subscribe(serv => {
      this.services = serv;
    }, err => console.log(err));
    // this.services = this.services.slice();
  }

}
