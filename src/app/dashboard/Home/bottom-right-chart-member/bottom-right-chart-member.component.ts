import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-right-chart-member',
  templateUrl: './bottom-right-chart-member.component.html',
  styleUrls: ['./bottom-right-chart-member.component.scss']
})
export class BottomRightChartMemberComponent implements OnInit {

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


  constructor() {
    this.loadScreenMeasuredChart();
    this.loadBloodGroupChart();
  }

  ngOnInit() {
  }

  loadScreenMeasuredChart() {
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
    this. barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this. barChartType = 'bar';
    this. barChartLegend = true;
    this. barChartData = [
      {
        data: [775, 759, 780, 781, 756, 755, 765, 579, 780, 871, 576, 755],
        label: 'Series A',
        fill: true,
        backgroundColor: '#107EB1',

      },
      {
        data: [728, 748, 740, 719, 786, 727, 728, 478, 740, 719, 786, 727],
        label: 'Series B',
        fill : true,
        backgroundColor : '#12DED0',
      }
    ];
  }


  loadBloodGroupChart() {
    this.bloodGroupChartOptions = {
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
    this. bloodGroupChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this. bloodGroupChartType = 'bar';
    this. bloodGroupChartLegend = true;
    this. bloodGroupChartData = [
      {
        data: [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55],
        label: 'Series A',
        fill: true,
        backgroundColor: '#107EB1',

      },
      {
        data: [28, 48, 40, 19, 86, 27, 28, 48, 40, 19, 86, 27],
        label: 'Series B',
        fill : true,
        backgroundColor : '#12DED0',
      }
    ];
  }


}
