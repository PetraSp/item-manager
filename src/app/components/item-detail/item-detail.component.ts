import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: IItem[];
  @Output() onAddToFavorites = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addToFavorites(favoriteTitle, favoritePhoto): void {
    const favorite = {
      itemTitle: favoriteTitle,
      itemPhoto: favoritePhoto,
    };
    this.onAddToFavorites.emit(favorite);
  }
}

