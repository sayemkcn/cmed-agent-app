import { Component, OnInit } from '@angular/core';
import {InventoryItemsModule} from "../../models/inventory-items.module";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  public inventoryItems = [new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box")];

  constructor() { }

  ngOnInit() {
  }

}
