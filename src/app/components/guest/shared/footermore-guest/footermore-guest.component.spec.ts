import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermoreGuestComponent } from './footermore-guest.component';

describe('FootermoreGuestComponent', () => {
  let component: FootermoreGuestComponent;
  let fixture: ComponentFixture<FootermoreGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootermoreGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootermoreGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
