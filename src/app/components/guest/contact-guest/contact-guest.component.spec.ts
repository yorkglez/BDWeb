import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGuestComponent } from './contact-guest.component';

describe('ContactGuestComponent', () => {
  let component: ContactGuestComponent;
  let fixture: ComponentFixture<ContactGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
