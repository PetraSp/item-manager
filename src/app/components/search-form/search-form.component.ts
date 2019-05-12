import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../models/item';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() items: IItem[];
  @Output() onSearchClick = new EventEmitter<any>();
  public searchForm: FormGroup;
  title: AbstractControl;
  description: AbstractControl;
  price: AbstractControl;
  email: AbstractControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      title: '',
      description: '',
      price: '',
      email: '',
    });

    this.title = this.searchForm.get('title').value;
    this.description = this.searchForm.get('description').value;
    this.price = this.searchForm.get('price').value;
    this.email = this.searchForm.get('email').value;
  }

  onSearch(): void {
    const filterBody = this.searchForm.value;
    this.onSearchClick.emit(filterBody);
  }
}
