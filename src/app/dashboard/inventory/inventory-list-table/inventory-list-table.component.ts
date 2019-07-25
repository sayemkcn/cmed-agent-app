import { Component, OnInit } from '@angular/core';
import {InventoryItemsModule} from "../../models/inventory-items.module";

@Component({
  selector: 'app-inventory-list-table',
  templateUrl: './inventory-list-table.component.html',
  styleUrls: ['./inventory-list-table.component.scss']
})
export class InventoryListTableComponent implements OnInit {

  public inventoryItems = [
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box"),
    new InventoryItemsModule("0001", "Antacyd Syrup", "Drugs", "1 File", "10 box")
  ];



  constructor() { }

  ngOnInit() {
  }

}
