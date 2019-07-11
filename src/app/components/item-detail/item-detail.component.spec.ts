import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    component.item = {
      title: 'iPhone',
      description: 'Lorem ipsum',
      price: '50',
      email: 'johndoe@test.me',
      image: 'image.png'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when addToFavorites is called', () => {
    it('should emit an onAddToFavorites event', () => {
      const favorite = {
        title: 'hello',
        photo: 'image.png',
      };
      component.onAddToFavorites.emit = jest.fn();
      component.addToFavorites(favorite.title, favorite.photo);
      expect(component.onAddToFavorites.emit).toBeCalledWith(favorite);
    });
  });
});
