import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoligOversigtComponent } from './bolig-oversigt.component';

describe('BoligOversigtComponent', () => {
  let component: BoligOversigtComponent;
  let fixture: ComponentFixture<BoligOversigtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoligOversigtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoligOversigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
