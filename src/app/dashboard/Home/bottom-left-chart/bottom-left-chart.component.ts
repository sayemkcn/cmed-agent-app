import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatDatepickerInputEvent, MatTabChangeEvent} from '@angular/material';
import {AuthService} from '../../../auth/shared/auth.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {PatientInfoService} from '../../service/patient-info.service';


@Component({
  selector: 'app-bottom-left-chart',
  templateUrl: './bottom-left-chart.component.html',
  styleUrls: ['./bottom-left-chart.component.scss'],
  providers: [DatePipe,]
})
export class BottomLeftChartComponent extends BaseComponent implements OnInit {

  patientInfo: Map<string, IStatusCount[]>;

  convertedData;

  fromDate = '2018-08-01';
  tooDate = '2019-02-01';
  measurementType = 'BP';

  constructor(private auth: AuthService, private datePipe: DatePipe, private measurementsService: PatientInfoService) {
    super(auth);
  }

  ngOnInit() {
    this.measurementsService.getMeasurements(this.measurementType, this.fromDate, this.tooDate).subscribe(measurement => {
      this.patientInfo = measurement;
      this.convertedData = this.convertData(this.patientInfo);

    }, err => this.handleError(err));

  }

  addEventFrom(event: MatDatepickerInputEvent<Date>) {
    this.fromDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();

    let dt = new Date(this.fromDate);
    dt.setMonth(dt.getMonth() + 6);
    this.tooDate = this.datePipe.transform(dt, 'yyyy-MM-dd').toString();

    this.getMeasures();
  }

  addEventToo(event: MatDatepickerInputEvent<Date>) {
    this.tooDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    let dt = new Date(this.tooDate);
    dt.setMonth(dt.getMonth() - 6);
    this.fromDate = this.datePipe.transform(dt, 'yyyy-MM-dd').toString();
    this.getMeasures();
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel == 'Blood Pressure') {
      this.measurementType = 'BP';
    }
    if (event.tab.textLabel == 'Pulse') {
      this.measurementType = 'PULSE_RATE';
    }
    if (event.tab.textLabel == 'Glucose') {
      this.measurementType = 'BLOOD_SUGAR';
    }
    if (event.tab.textLabel == 'B.M.I') {
      this.measurementType = 'BMI';
    }
    if (event.tab.textLabel == 'Temp') {
      this.measurementType = 'EAR_TEMP';
    }
    this.getMeasures();

  }


  getMeasures() {
    if (this.fromDate != '' && this.tooDate != '') {
      let fdt = new Date(this.fromDate);
      let tdt = new Date(this.tooDate);
      fdt.setDate(1);
      tdt.setDate(1);
      let fm = this.datePipe.transform(fdt, 'yyyy-MM-dd').toString();
      let to = this.datePipe.transform(tdt, 'yyyy-MM-dd').toString();


      this.measurementsService.getMeasurements(this.measurementType, fm, to).subscribe(measurement => {
        this.patientInfo = measurement;

        this.convertedData = this.convertData(this.patientInfo);


      }, err => this.handleError(err));
    }

  }


  convertData(patientData: Map<string, IStatusCount[]>) {

    let chartData: any[] = [];
    let chartItem: any[] = [];

    Object.keys(patientData).forEach(function(key) {
      let temp: number = 0;

      chartItem['month'] = key;

      patientData[key].forEach((statusCount: IStatusCount) => {
        if (statusCount.status == 'Low') {
          statusCount.status = 'low';
        }
        if (statusCount.status == 'Mild High') {
          statusCount.status = 'mid_high';
        }
        if (statusCount.status == 'Moderate High') {
          statusCount.status = 'moderate_high';
        }
        if (statusCount.status == 'Normal') {
          statusCount.status = 'normal';
        }
        if (statusCount.status == 'Prehypertension') {
          statusCount.status = 'prehyper_tension';
        }
        if (statusCount.status == 'Severe High') {
          statusCount.status = 'severe_high';
        }
        if (statusCount.status == 'High') {
          statusCount.status = 'high';
        }

        chartItem[statusCount.status] = statusCount.count;
        temp += statusCount.count;

      });

      chartData.push(chartItem);
      chartItem = [];

    });
    return chartData;

  }


  getHeight(height: number) {
    return ((height * 100) / 1906) + 10 + "%";
  }


}

