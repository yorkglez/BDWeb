import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNurseryGuestComponent } from './nav-nursery-guest.component';

describe('NavNurseryGuestComponent', () => {
  let component: NavNurseryGuestComponent;
  let fixture: ComponentFixture<NavNurseryGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNurseryGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNurseryGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
