import { Component, Inject, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { IItem } from '../../models/item';
import { FavoriteListComponent } from '../../components/favorite-list/favorite-list.component';
import { MatDialog} from '@angular/material';

export interface DialogData {
  title: string;
  photo: string;
}

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

  public title: string;
  public photo: string;

  constructor(@Inject(ItemService) private itemService: ItemService, public dialog: MatDialog) {}

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

  favorites(favorite) {
    this.title = favorite.itemTitle;
    this.photo = favorite.itemPhoto;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FavoriteListComponent, {
      data: {
        title: this.title,
        photo: this.photo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


// In the favourite modal, I want to be able to search by title and the possibility to remove the items
// from the favourite list without having to close the modal.
