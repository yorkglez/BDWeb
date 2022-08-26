import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNurseryComponent } from './navbar-nursery.component';

describe('NavbarNurseryComponent', () => {
  let component: NavbarNurseryComponent;
  let fixture: ComponentFixture<NavbarNurseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNurseryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNurseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
