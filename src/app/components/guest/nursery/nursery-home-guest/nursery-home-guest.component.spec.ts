import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryHomeGuestComponent } from './nursery-home-guest.component';

describe('NurseryHomeGuestComponent', () => {
  let component: NurseryHomeGuestComponent;
  let fixture: ComponentFixture<NurseryHomeGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryHomeGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryHomeGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
