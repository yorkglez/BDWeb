import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusGuestComponent } from './aboutus-guest.component';

describe('AboutusGuestComponent', () => {
  let component: AboutusGuestComponent;
  let fixture: ComponentFixture<AboutusGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
