import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityGuestComponent } from './sustainability-guest.component';

describe('SustainabilityGuestComponent', () => {
  let component: SustainabilityGuestComponent;
  let fixture: ComponentFixture<SustainabilityGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
