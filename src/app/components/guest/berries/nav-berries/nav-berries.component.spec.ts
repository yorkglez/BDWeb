import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBerriesComponent } from './nav-berries.component';

describe('NavBerriesComponent', () => {
  let component: NavBerriesComponent;
  let fixture: ComponentFixture<NavBerriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBerriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
