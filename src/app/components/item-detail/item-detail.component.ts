import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: IItem[];
  @Input() isFavorite: boolean;
  @Output() onAddToFavorites = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addToFavorites(favoriteTitle, favoritePhoto): void {
    const favorite = {
      title: favoriteTitle,
      photo: favoritePhoto,
    };
    this.onAddToFavorites.emit(favorite);
  }
}
