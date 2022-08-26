import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryClonalProcessGuestComponent } from './nursery-clonal-process-guest.component';

describe('NurseryClonalProcessGuestComponent', () => {
  let component: NurseryClonalProcessGuestComponent;
  let fixture: ComponentFixture<NurseryClonalProcessGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryClonalProcessGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryClonalProcessGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
