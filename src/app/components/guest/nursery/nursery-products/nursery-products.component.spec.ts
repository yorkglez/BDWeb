import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryProductsComponent } from './nursery-products.component';

describe('NurseryProductsComponent', () => {
  let component: NurseryProductsComponent;
  let fixture: ComponentFixture<NurseryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
