import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FavoriteItems } from '../../models/favoriteItems';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {
  public favoriteItems;
  @Output() onDeleteItem = new EventEmitter<any>();
  public favoriteForm: FormGroup;
  title: AbstractControl;
  public searchText;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FavoriteItems, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.favoriteItems = this.data.favoriteItems;
    this.favoriteForm = this.fb.group({
      title: '',
    });

    this.title = this.favoriteForm.get('title').value;
  }

  deleteItem(itemToDelete) {
    this.favoriteItems = this.favoriteItems.filter(item => item.id !== itemToDelete);
    this.onDeleteItem.emit(itemToDelete);
  }
}
