import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBerriesComponent } from './home-berries.component';

describe('HomeBerriesComponent', () => {
  let component: HomeBerriesComponent;
  let fixture: ComponentFixture<HomeBerriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBerriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
