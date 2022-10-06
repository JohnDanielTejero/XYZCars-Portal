import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsItemsListsComponent } from './cars-items-lists.component';

describe('CarsItemsListsComponent', () => {
  let component: CarsItemsListsComponent;
  let fixture: ComponentFixture<CarsItemsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsItemsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsItemsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
