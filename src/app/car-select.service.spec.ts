import { TestBed } from '@angular/core/testing';

import { CarSelectService } from './car-select.service';

describe('CarSelectService', () => {
  let service: CarSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
