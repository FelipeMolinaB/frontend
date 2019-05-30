import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDrinksComponent } from './food-drinks.component';

describe('FoodDrinksComponent', () => {
  let component: FoodDrinksComponent;
  let fixture: ComponentFixture<FoodDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
