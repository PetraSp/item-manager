import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbyFormComponent } from './orderby-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('OrderbyFormComponent', () => {
  let component: OrderbyFormComponent;
  let fixture: ComponentFixture<OrderbyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbyFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChange', () => {
    it('it should emit onSelected event', () => {
      const value = 'title';
      component.onSelected.emit = jest.fn();
      component.onChange(value);
      expect(component.onSelected.emit).toBeCalledWith(value);
    });
  });
});
