import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: IItem[];
  constructor() { }

  ngOnInit() {
  }

}
