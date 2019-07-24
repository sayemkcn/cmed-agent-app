import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-right-chart-blood-group',
  templateUrl: './bottom-right-chart-blood-group.component.html',
  styleUrls: ['./bottom-right-chart-blood-group.component.scss']
})
export class BottomRightChartBloodGroupComponent implements OnInit {
  public barChartOptions: any;
  public barChartLabels: any;
  public barChartType: any;
  public barChartLegend: any;
  public barChartData: any;


  constructor() {
    this.loadScreenMeasuredChart();
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
    this. barChartLabels = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-', 'Unk'];
    this. barChartType = 'bar';
    this. barChartLegend = true;
    this. barChartData = [
      {
        data: [790, 790, 790, 790, 790, 790, 790, 790, 790],
        label: 'Series A',
        fill: true,
        backgroundColor: '#22D1D8',

      }
    ];
  }



}
