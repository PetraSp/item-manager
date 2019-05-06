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

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((itemsData) => {this.items = itemsData.items;
      });
  }
}




