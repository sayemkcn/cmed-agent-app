import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  selectedItem=1;
  constructor() { }

  ngOnInit() {
  }
  getSelectedItem($event){
    this.selectedItem = $event;
  }

}
