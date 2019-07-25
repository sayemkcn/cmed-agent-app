import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InventoryItemsModule {
  public id;
  public name;
  public category;
  public packSize;
  public stockBalance;

  constructor(id, name, category, packSize, stockBalance) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.packSize = packSize;
    this.stockBalance = stockBalance;
  }
}
