import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClient } from '@angular/common/http';

describe('Item.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: {} },
    ]
  }));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });
});
