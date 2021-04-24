import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaanberegningOversigtComponent } from './laanberegning-oversigt.component';

describe('LaanberegningOversigtComponent', () => {
  let component: LaanberegningOversigtComponent;
  let fixture: ComponentFixture<LaanberegningOversigtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaanberegningOversigtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaanberegningOversigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
