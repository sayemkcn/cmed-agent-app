import {Component, OnInit} from '@angular/core';
import {MemberScreenedService} from "../../service/member-screened.service.service";
import {IScreened} from "../../models/screened.model";
import {BaseComponent} from "../../../shared/base/base.component";
import {AuthService} from "../../../auth/shared/auth.service";

@Component({
  selector: 'app-bottom-right-chart-member',
  templateUrl: './bottom-right-chart-member.component.html',
  styleUrls: ['./bottom-right-chart-member.component.scss']
})
export class BottomRightChartMemberComponent extends BaseComponent implements OnInit {

  // screenedStats : IScreened[];

  public barChartOptions: any;
  public barChartLabels: any;
  public barChartType: any;
  public barChartLegend: any;
  public barChartData: any;

  public bloodGroupChartOptions: any;
  public bloodGroupChartLabels: any;
  public bloodGroupChartType: any;
  public bloodGroupChartLegend: any;
  public bloodGroupChartData: any;


  constructor(private memberService: MemberScreenedService, private auth: AuthService) {
    super(auth);
  }

  ngOnInit() {
    this.memberService.getScreened().subscribe((scrn: IScreened[]) => {
      // this.screenedStats=scrn;
      this.loadScreenMeasuredChart(scrn);

    }, err => this.handleError(err))


  }

  loadScreenMeasuredChart(scrn: IScreened[]) {
    // console.log(scrn);
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            fontFamily: 'Montserrat'
          },
          categoryPercentage: 0.6
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      hover: {mode: null},
      maintainAspectRatio: false,
    };
    this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.barChartType = 'bar';
    this.barChartLegend = true;

    // for(let i of scrn){
    //   console.log(scrn.month);
    // }


    this.barChartData = this.convertData(scrn)
  }

  convertData(stats: IScreened[]) {
    var barChartData = [
      {
        data: [],
        backgroundColor: '#107EB1',

      },
      {
        data: [],
        backgroundColor: '#12DED0',
      }
    ];
    stats.forEach(s=>{
      barChartData[0].data.push(s.total);
      barChartData[1].data.push(s.screened);
    });
    return barChartData;
  }


}
