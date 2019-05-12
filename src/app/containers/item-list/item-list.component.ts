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

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((itemsData) => {
        this.items = itemsData.items;
        this.filteredItems = this.items;
      });
  }

  public filterItems(filterBody): void {
    console.log(filterBody);
    this.filteredItems = this.filteredItems.filter(item =>
      this.filterFor(item.title, filterBody.title));

    this.filteredItems = this.filteredItems.filter(item =>
      this.filterFor(item.description, filterBody.description));

    this.filteredItems = this.filteredItems.filter(item =>
      this.filterFor(item.price.toString(), filterBody.price));

    this.filteredItems = this.filteredItems.filter(item =>
      this.filterFor(item.email, filterBody.email));
  }

  private matchItemField(itemField: string, filterField: string) {
    return itemField.toLowerCase().indexOf(filterField.toLowerCase()) > -1;
  }

  private skipEmptyFilter(filterField: string) {
    return filterField.length > 0;
  }

  private filterFor(itemField: string, filterField: string) {
    return !this.skipEmptyFilter(filterField) || this.matchItemField(itemField, filterField);
  }
}
