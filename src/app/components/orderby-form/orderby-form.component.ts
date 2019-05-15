import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-orderby-form',
  templateUrl: './orderby-form.component.html',
  styleUrls: ['./orderby-form.component.css']
})
export class OrderbyFormComponent implements OnInit {
  @Input() items: IItem[];
  @Input() filteredItems: IItem[];
  @Output() onSelected = new EventEmitter<any>();
  public selected;

  options: any[] = [
    {value: null, viewValue: 'Please select'},
    {value: 'title', viewValue: 'Title'},
    {value: 'description', viewValue: 'Description'},
    {value: 'price', viewValue: 'Price'},
    {value: 'email', viewValue: 'Email'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public onChange(value) {
    this.selected = value;
    this.onSelected.emit(value);
  }
}
