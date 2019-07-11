import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSearch', () => {
    it('should call onSearchClick', () => {
      const filterBody = {
        description: '',
        email: '',
        maxPrice: '',
        minPrice: '',
        title: ''
      };
      component.onSearchClick.emit = jest.fn();
      component.onSearch();
      expect(component.onSearchClick.emit).toHaveBeenCalledWith(filterBody);
    });
  });
});
