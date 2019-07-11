import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListComponent } from './favorite-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [Ng2SearchPipeModule, FormsModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('FavoriteListComponent', () => {
    it('delete items', () => {
      const mockId = 2;
      const itemToDelete = [{
        id: 2,
        title: 'hello',
        photo: 'image.png',
      }];
      const favoriteItems = [
        ...itemToDelete,
        {
          id: 1,
          title: 'hello',
          photo: 'image.png',
        },
      ];
      component.onDeleteItem.emit = jest.fn();
      component.favoriteItems = favoriteItems;
      component.deleteItem(mockId);
      expect(component.favoriteItems.length).toBe(1);
      expect(component.onDeleteItem.emit).toBeCalledWith(mockId);
    });
  });
});

