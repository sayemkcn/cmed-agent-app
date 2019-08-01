import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatDatepickerInputEvent, MatTabChangeEvent} from "@angular/material";
import {AuthService} from "../../../auth/shared/auth.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {PatientInfoService} from "../../service/patient-info.service";
import {ChartDataService, Service} from "../../service/chart-data.service";


@Component({
  selector: 'app-bottom-left-chart',
  templateUrl: './bottom-left-chart.component.html',
  styleUrls: ['./bottom-left-chart.component.scss'],
  providers: [DatePipe, ChartDataService, Service]
})
export class BottomLeftChartComponent extends BaseComponent implements OnInit {

  private patientInfo: Map<string, IStatusCount[]>;

  private chartDatas;
  private convertedData;

  // private fromDate = new DatePipe('en-US').transform(Date.now(), 'yyyy-MM-dd');
  private fromDate = "2018-08-01"
  private tooDate = "2019-02-20";
  private measurementType = "BP";

  constructor(private auth: AuthService, private datePipe: DatePipe, private measurementsService: PatientInfoService, private service: Service, private chartDataSource: ChartDataService) {
    super(auth);
    this.chartDatas = service.getChartsInfo();

  }

  ngOnInit() {
    this.measurementsService.getMeasurements(this.measurementType, this.fromDate, this.tooDate).subscribe(measurement => {
      this.patientInfo = measurement;
      this.convertedData = this.convertData(this.patientInfo);

    }, err => this.handleError(err));

  }

  addEventFrom(event: MatDatepickerInputEvent<Date>) {
    this.fromDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    this.getMeasures();
  }

  addEventToo(event: MatDatepickerInputEvent<Date>) {
    this.tooDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    this.getMeasures();
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log(event.tab.textLabel);
    // if (this.measurementType != '' && this.measurementType == "Blood Pressure") {this.measurementType = "BP";}
    // if (this.measurementType != '' && this.measurementType == "Pulse") {this.measurementType = "Pulse";}
    // if (this.measurementType != '' && this.measurementType == "Glucose") {this.measurementType = "BP";}
    // if (this.measurementType != '' && this.measurementType == "B.M.I") {this.measurementType = "BMI";}
    // if (this.measurementType != '' && this.measurementType == "Temp") {this.measurementType = "Temp";}

  }

  getMeasures() {


    if (this.fromDate != '' && this.tooDate != '') {
      this.measurementsService.getMeasurements(this.measurementType, this.fromDate, this.tooDate).subscribe(measurement => {
        this.patientInfo = measurement;

        this.convertedData = this.convertData(this.patientInfo);


      }, err => this.handleError(err))
    }

  }


  convertData(patientData: Map<string, IStatusCount[]>) {

    let chartData: any[] = [];
    let chartItem: any[] = [];

    Object.keys(patientData).forEach(function (key) {

      chartItem['month'] = key;

      patientData[key].forEach((statusCount: IStatusCount) => {
        if (statusCount.status == "Low") statusCount.status = 'low';
        if (statusCount.status == "Mild High") statusCount.status = 'mid_high';
        if (statusCount.status == "Moderate High") statusCount.status = 'moderate_high';
        if (statusCount.status == "Normal") statusCount.status = 'normal';
        if (statusCount.status == "Prehypertension") statusCount.status = 'prehyper_tension';
        if (statusCount.status == "Severe High") statusCount.status = 'severe_high';
        if (statusCount.status == "High") statusCount.status = 'high';

        chartItem[statusCount.status] = statusCount.count;
      });

      chartData.push(chartItem);
      chartItem = [];

    });

    return chartData;

  }

  getColor(bloodGroupName: string) {
    if (bloodGroupName == 'low') return '#E64B61'
    else if (bloodGroupName == 'A-') return '#DF9A83'
    else if (bloodGroupName == 'B+') return '#22D1D8'
    else if (bloodGroupName == 'B-') return '#22AEE3'
    else if (bloodGroupName == 'O+') return '#5874C1'
    else if (bloodGroupName == 'O-') return '#CB6CC8'
    else if (bloodGroupName == 'AB+') return '#FBD332'
    else if (bloodGroupName == 'AB-') return '#30C69F'
    else if (bloodGroupName == 'Unknown') return '#4F5D6F'
  }

  getHeight(height: number) {
    return ((height * 100) / 1906) + 10 + "%";
  }


}

