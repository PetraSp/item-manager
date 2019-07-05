import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
public itemTitle;
public itemPhoto;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }
}

