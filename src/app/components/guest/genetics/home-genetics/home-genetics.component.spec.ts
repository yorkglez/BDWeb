import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeneticsComponent } from './home-genetics.component';

describe('HomeGeneticsComponent', () => {
  let component: HomeGeneticsComponent;
  let fixture: ComponentFixture<HomeGeneticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGeneticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
