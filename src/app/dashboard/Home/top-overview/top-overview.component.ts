import {Component, OnInit} from '@angular/core';
import {Statistics} from '../../models/statistics';
import {StatisticsService} from '../../service/statistics.service';
import {AuthService} from '../../../auth/shared/auth.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {DatePipe} from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss'],
  providers: [DatePipe]
})
export class TopOverviewComponent extends BaseComponent implements OnInit {


  // private fromDate = new DatePipe('en-US').transform(Date.now(), 'yyyy-MM-dd');
  fromDate = '2019-04-03';
  tooDate = '2019-07-20';


  percentageServed = 70;
  progressValue = 'c100 p' + this.percentageServed + ' blue';

  measurementStatistics: Statistics;
  currentDate = Date.now();


  constructor(private statService: StatisticsService, private auth: AuthService, private datePipe: DatePipe) {
    super(auth);
  }


  ngOnInit() {
    this.statService.getStatistics(this.auth.getCompanyCode(), this.fromDate, this.tooDate).subscribe(stats => {
      this.measurementStatistics = stats;
    }, err => this.handleError(err));

  }

  addEventFrom(event: MatDatepickerInputEvent<Date>) {
    this.fromDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();

  }

  addEventToo(event: MatDatepickerInputEvent<Date>) {
    this.tooDate = this.datePipe.transform(event.value, 'yyyy-MM-dd').toString();
    this.getStats();
  }

  getStats() {
    if ((this.fromDate != '' || this.fromDate != null) && (this.tooDate != '' || this.tooDate != null)) {
      this.statService.getStatistics(this.auth.getCompanyCode(), this.fromDate, this.tooDate).subscribe(stats => {
        this.measurementStatistics = stats;
      }, err => this.handleError(err));
    }

  }

  getPercent(): number {
    if (this.measurementStatistics == null || this.measurementStatistics.totalEmployees === 0) return 0;
    return Math.ceil((this.measurementStatistics.totalServed * 100) / this.measurementStatistics.totalEmployees);
  }


}
