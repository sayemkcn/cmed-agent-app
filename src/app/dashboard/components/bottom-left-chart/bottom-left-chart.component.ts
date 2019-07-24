import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-left-chart',
  templateUrl: './bottom-left-chart.component.html',
  styleUrls: ['./bottom-left-chart.component.scss']
})
export class BottomLeftChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [150, 130, 115, 110, 127, 135]}
  ];

  public chartLabels: Array<any> = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
