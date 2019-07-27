import { Component, OnInit } from '@angular/core';
import {PatientInfoService, Service} from "../../service/patient-info.service";

@Component({
  selector: 'app-bottom-left-chart',
  templateUrl: './bottom-left-chart.component.html',
  styleUrls: ['./bottom-left-chart.component.scss'],
  providers: [Service, PatientInfoService]
})
export class BottomLeftChartComponent implements OnInit {

  patientInfo : PatientInfoService[];

  constructor( service: Service, pts:PatientInfoService) {
    this.patientInfo = service.getPatientsInfo();
  }

  customizeTooltip(arg: any) {
    return {
      text: arg.percentText + ' - ' + arg.valueText
    };
  }

  ngOnInit() {
  }


}
