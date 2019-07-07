import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FavoriteItems } from '../../models/favoriteItems';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {
  public favoriteItems;
  @Output() onDeleteItem = new EventEmitter<any>();
  public searchText;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FavoriteItems) {
  }

  ngOnInit() {
    this.favoriteItems = this.data.favoriteItems;
  }

  deleteItem(itemToDelete) {
    this.favoriteItems = this.favoriteItems.filter(item => item.id !== itemToDelete);
    this.onDeleteItem.emit(itemToDelete);
  }
}

