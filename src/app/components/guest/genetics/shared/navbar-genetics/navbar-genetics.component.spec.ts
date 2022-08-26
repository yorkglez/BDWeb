import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGeneticsComponent } from './navbar-genetics.component';

describe('NavbarGeneticsComponent', () => {
  let component: NavbarGeneticsComponent;
  let fixture: ComponentFixture<NavbarGeneticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGeneticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
