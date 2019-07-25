import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  public selectedComponent = 1;

  @Output() messageEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onListItemSelected(itemIndex){
    this.selectedComponent = itemIndex;
    // console.log(this.selectedComponent)
    this.messageEvent.emit(this.selectedComponent);
  }


  getSelectedItem(){
    return this.selectedComponent;
  }


}
