import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbyFormComponent } from './orderby-form.component';

describe('OrderbyFormComponent', () => {
  let component: OrderbyFormComponent;
  let fixture: ComponentFixture<OrderbyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbyFormComponent ]
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
});
