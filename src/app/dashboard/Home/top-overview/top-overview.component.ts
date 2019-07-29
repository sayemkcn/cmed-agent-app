import {Component, OnInit} from '@angular/core';
import {Statistics} from "../../models/statistics";
import {StatisticsService} from "../../service/statistics.service";
import {AuthService} from "../../../auth/shared/auth.service";
import {BaseComponent} from "../../../shared/base/base.component";
import {DateUtil} from "../../../shared/utils/date-util";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss'],
  providers:[DatePipe]
})
export class TopOverviewComponent extends BaseComponent implements OnInit {


  dateRange=new FormGroup({
    fromDate: new FormControl(),
    tooDate: new FormControl()
  })


  public today_date =Date();


  public percentageServed = 70;
  public progressValue = 'c100 p' + this.percentageServed + ' blue';

  private measurementStatistics:Statistics;

  constructor(private statService: StatisticsService, private auth: AuthService,private datePipe: DatePipe,) {
    super(auth)
  }
  // public one= this.datePipe.transform(dateStart,'dd-MM-yyyy').toString()
  public one="20/07/2019";
  public two="23/07/2019";
  ngOnInit():void {

    this.statService.getStatistics(this.one,this.two).subscribe(stats=>{
      this.measurementStatistics=stats;
    },err=>this.handleError(err) )

  }



}
