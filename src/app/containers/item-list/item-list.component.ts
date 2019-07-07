import { Component, Inject, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { IItem } from '../../models/item';
import { FavoriteListComponent } from '../../components/favorite-list/favorite-list.component';
import { MatDialog } from '@angular/material';
import { Favorite } from '../../models/favoriteItems';

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
  public favorites: Favorite[] = [];

  constructor(@Inject(ItemService) private itemService: ItemService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((itemsData) => {
        this.items = itemsData.items;
        this.filteredItems = this.items;
        this.priceOfItems = this.filteredItems.map(item => {
          return item.price;
        });
        this.minPrice = Number(this.priceOfItems.sort((a, b) => a - b)[0]);
        this.maxPrice = Number(this.priceOfItems.sort((a, b) => a - b)[this.priceOfItems.length - 1]);
      });
  }

  public filterItems(filterBody): void {
    this.filteredItems = this.items.filter(item => {
        return (this.filterFor(item.title, filterBody.title, 'title') &&
          this.filterFor(item.description, filterBody.description, 'description') &&
          this.filterFor(item.email, filterBody.email, 'email') &&
          this.filterFor(item.price, filterBody.minPrice, 'minPrice') &&
          this.filterFor(item.price, filterBody.maxPrice, 'maxPrice')
        );
      },
    );
  }

  private matchItemField(itemField: string, filterField: string | number, fieldName: string) {
    if (fieldName === 'minPrice' && this.minPrice <= filterField) {
      return Number(itemField) >= filterField;
    }
    if (fieldName === 'maxPrice' && filterField <= this.maxPrice) {
      return Number(itemField) <= filterField;
    }
    return itemField.toLowerCase().indexOf(filterField.toString().toLowerCase()) > -1;
  }

  private skipEmptyFilter(filterField: string) {
    return filterField.length > 0;
  }

  private filterFor(itemField: string, filterField: string | number, fieldName: string) {
    return !this.skipEmptyFilter(filterField.toString()) || this.matchItemField(itemField, filterField, fieldName);
  }

  public orderList(value): void {
    this.selected = value;
  }

  addToFavorites(favorite: Favorite) {
    this.favorites = [
      ...this.favorites,
      {
        id: this.favorites.length > 0 ? this.favorites[this.favorites.length - 1].id + 1 : 1,
        title: favorite.title,
        photo: favorite.photo
      }
    ];
  }

  removeFavorites(id: number) {
    this.favorites = [
      ...this.favorites.filter(item => item.id !== id)];
  }

  openDialog() {
    const dialogRef = this.dialog.open(FavoriteListComponent, {
      height: '400px',
      width: '600px',
      data: {
        favoriteItems: this.favorites
      }
    });
    const sub = dialogRef.componentInstance.onDeleteItem.subscribe((id) => {
      this.removeFavorites(id);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

}

