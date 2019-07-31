import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatDatepickerInputEvent} from "@angular/material";
import {AuthService} from "../../../auth/shared/auth.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {PatientInfoService} from "../../service/patient-info.service";
import {ChartDataService, Service} from "../../service/chart-data.service";


@Component({
  selector: 'app-bottom-left-chart',
  templateUrl: './bottom-left-chart.component.html',
  styleUrls: ['./bottom-left-chart.component.scss'],
  providers: [DatePipe, Service, ChartDataService]
})
export class BottomLeftChartComponent extends BaseComponent implements OnInit {

  private patientInfo: Map<string, IStatusCount[]>;


  private chartDatas: ChartDataService[];


  private fromDate = new DatePipe('en-US').transform(Date.now(), 'yyyy-MM-dd');
  private tooDate = "2019-08-23";
  private measurementType = "BP";

  constructor(private auth: AuthService, private datePipe: DatePipe, private measurementsService: PatientInfoService,
              service: Service, catchData: ChartDataService) {
    super(auth);
    this.chartDatas = service.getChartsInfo();

  }

  customizeTooltip(arg: any) {
    return {
      text: arg.percentText + '-' + arg.valueText
    };
  }

  ngOnInit() {
    this.measurementsService.getMeasurements(this.measurementType, this.fromDate, this.tooDate).subscribe(measurement => {
      this.patientInfo = measurement;
      // console.log(measurement);
    }, err => this.handleError(err))

    // this.convertData(this.patientInfo)
  }

  addEventFrom(event: MatDatepickerInputEvent<Date>) {
    this.fromDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    this.getMeasures()
  }

  addEventToo(event: MatDatepickerInputEvent<Date>) {
    this.tooDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    this.getMeasures()
  }

  getMeasures() {
    if (this.fromDate != '' && this.tooDate != '') {
      this.measurementsService.getMeasurements(this.measurementType, this.fromDate, this.tooDate).subscribe(measurement => {
        this.patientInfo = measurement;
        // console.log("here")
        // console.log(this.convertData(this.patientInfo));

      }, err => this.handleError(err))
    }

  }

  convertData(patientData: Map<string, IStatusCount[]>): any[] {

    console.log(patientData)

    let chartData: any=[];

    Object.keys(patientData).forEach(function (key){
      let chartItem: Map<string, any>;
      chartItem.set('month', key);
      patientData[key].forEach((statusCount: IStatusCount) => {
        chartItem.set(statusCount.status, statusCount.count);
      });
      chartData.push(chartItem);
    });

    return chartData;
  }

}

