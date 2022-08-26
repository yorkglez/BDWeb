import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryProductsGuestComponent } from './nursery-products-guest.component';

describe('NurseryProductsGuestComponent', () => {
  let component: NurseryProductsGuestComponent;
  let fixture: ComponentFixture<NurseryProductsGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryProductsGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryProductsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
