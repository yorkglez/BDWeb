import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryFooterComponent } from './nursery-footer.component';

describe('NurseryFooterComponent', () => {
  let component: NurseryFooterComponent;
  let fixture: ComponentFixture<NurseryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseryFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
