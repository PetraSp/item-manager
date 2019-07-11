import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatDialog} from '@angular/material';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ItemListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('orderList', () => {
    const valuePrice = 'price';
    const valueString = 'title';
    const items = [
      {
        title: 'iPhone 6S Oro',
        description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar.' +
          'Me han dado uno en el trabajo y no necesito el que me compré.' +
          'En tienda lo encuentras por 749 euros y yo lo vendo por 740.' +
          'Las descripciones las puedes encontrar en la web de apple. Esta libre.',
        price: '740',
        email: 'iphonemail@wallapop.com',
        image: 'iphone.png'
      },
      {
        title: 'Polaroid 635',
        description: 'Cámara clásica de fotos Polaroid, modelo 635.' +
          'Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas.' +
          'Se necesitan carretes instax 20 para hacer fotos. Tamaño M.',
        price: '50',
        email: 'cameramail@wallapop.com',
        image: 'camera.png'
      },
      {
        title: 'Bolso piel marca Hoss',
        description: 'Vendo bolso de piel marrón grande de la marca Hoss.' +
          'Lo compré hace dos temporadas. Esta en perfectas condiciones,' +
          'siempre se ha guardado en bolsa de tela para su conservación.' +
          'Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo.' +
          'Tiene varios compartimentos dentro.',
        price: '250',
        email: 'bagmail@wallapop.com',
        image: 'bag.png'
      },
    ];

    it('should sort variables that are numbers', () => {
      component.filteredItems = [...items];
      component.orderList(valuePrice);
      expect(component.filteredItems[0]).toBe(items[1]);
    });
    it('should sort variables that are strings', () => {
      component.filteredItems = [...items];
      component.orderList(valueString);
      expect(component.filteredItems[0]).toBe(items[2]);
    });
  });

  describe('skipEmptyFilter', () => {
    it('should skip empty filters', () => {
      expect(component.skipEmptyFilter('')).toBe(false);
      expect(component.skipEmptyFilter('title')).toBe(true);
    });
  });

  describe('addToFavorites', () => {
    const favorites = [
      {
        id: 1,
        title: 'iPhone',
        photo: 'image1.png'
      }
    ];
    const favorite = {
      id: 2,
      title: 'polaroid',
      photo: 'image2.png'
    };

    it('add to favorites', () => {
      component.favorites = favorites;
      component.addToFavorites(favorite);
      expect(component.favorites.length).toBe(2);
      component.addToFavorites(favorite);
      expect(component.favorites.length).not.toBe(3);
    });
  });
});
