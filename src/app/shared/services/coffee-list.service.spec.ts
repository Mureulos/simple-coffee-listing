import { TestBed } from '@angular/core/testing';

import { CoffeeListService } from './coffee-list.service';

describe('CoffeeListService', () => {
  let service: CoffeeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
