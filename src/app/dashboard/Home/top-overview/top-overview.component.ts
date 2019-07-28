import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss']
})
export class TopOverviewComponent implements OnInit {
  today_date = Date.now();
  public percentageServed = 70;
  public progressValue = 'c100 p' + this.percentageServed + ' blue';

  constructor() {
  }

  ngOnInit() {
  }

}
