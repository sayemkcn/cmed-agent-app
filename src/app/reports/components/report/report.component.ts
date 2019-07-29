import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  selectedItem=1;
  constructor() { }

  ngOnInit() {
  }
  getSelectedItem($event){
    this.selectedItem = $event;
  }
}
