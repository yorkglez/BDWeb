import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProduceComponent } from './home-produce.component';

describe('HomeProduceComponent', () => {
  let component: HomeProduceComponent;
  let fixture: ComponentFixture<HomeProduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
