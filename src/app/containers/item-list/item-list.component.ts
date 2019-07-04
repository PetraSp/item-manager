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

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((itemsData) => {
        this.items = itemsData.items;
        this.filteredItems = this.items;
      });
  }

  public filterItems(filterBody): void {
    this.filteredItems = this.items.filter(item => (
        this.filterFor(item.title, filterBody.title) &&
        this.filterFor(item.description, filterBody.description) &&
        this.filterFor(item.email, filterBody.email) &&
        this.filterFor(item.price, filterBody.price)
      )
    );
  }

  private matchItemField(itemField: string, filterField: string | number) {
    if (typeof(filterField) === 'number') {
      return Number(itemField) >= filterField;
    }
    return itemField.toLowerCase().indexOf(filterField.toLowerCase()) > -1;
  }

  private skipEmptyFilter(filterField: string) {
    return filterField.length > 0;
  }

  private filterFor(itemField: string, filterField: string | number) {
    return !this.skipEmptyFilter(filterField.toString()) || this.matchItemField(itemField, filterField);
  }

  public orderList(value): void {
      this.selected = value;
  }

}
