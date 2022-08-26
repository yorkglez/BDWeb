import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonalProcessComponent } from './clonal-process.component';

describe('ClonalProcessComponent', () => {
  let component: ClonalProcessComponent;
  let fixture: ComponentFixture<ClonalProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonalProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonalProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
