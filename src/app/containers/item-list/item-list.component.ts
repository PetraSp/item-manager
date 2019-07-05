import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  public items: IItem[] = [];
  public filteredItems: IItem[] = [];
  public selected;
  public minPrice = 0;
  public maxPrice = null;
  public priceOfItems;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((itemsData) => {
        this.items = itemsData.items;
        this.filteredItems = this.items;
        console.log(this.filteredItems);
      });
    this.priceOfItems = this.filteredItems.map(item => {
      return item.price;
    });
    this.minPrice = Number(this.priceOfItems.sort((a, b) => a - b)[0]);
    console.log(this.minPrice);
    this.maxPrice = Number(this.priceOfItems.sort((a, b) => a - b)[this.priceOfItems.length - 1]);
    console.log(this.maxPrice);
  }

  public filterItems(filterBody): void {
    this.filteredItems = this.items.filter(item => (
        this.filterFor(item.title, filterBody.title) &&
        this.filterFor(item.description, filterBody.description) &&
        this.filterFor(item.email, filterBody.email) &&
        this.filterFor(item.price, filterBody.minPrice, filterBody.maxPrice),
        console.log(item.price, filterBody.minPrice, filterBody.maxPrice)
      ),
    );
  }

  private matchItemField(itemField: string, filterField: string | number, filterField2?: string | number) {
    if ((typeof(filterField || filterField2) === 'number') &&
      (this.minPrice <= filterField && filterField2 <= this.maxPrice)) {
        return Number(itemField) >= filterField;
      }
    return itemField.toLowerCase().indexOf(filterField.toString().toLowerCase()) > -1;
  }

  private skipEmptyFilter(filterField: string) {
    return filterField.length > 0;
  }

  private filterFor(itemField: string, filterField: string | number, filterField2?: string | number) {
    return !this.skipEmptyFilter(filterField.toString()) || this.matchItemField(itemField, filterField, filterField2);
  }

  public orderList(value): void {
      this.selected = value;
  }
}

