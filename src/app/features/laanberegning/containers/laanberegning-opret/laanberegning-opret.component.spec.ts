import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaanberegningOpretComponent } from './laanberegning-opret.component';

describe('LaanberegningOpretComponent', () => {
  let component: LaanberegningOpretComponent;
  let fixture: ComponentFixture<LaanberegningOpretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaanberegningOpretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaanberegningOpretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
