import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaanDetaljerComponent } from './laan-detaljer.component';

describe('LaanDetaljerComponent', () => {
  let component: LaanDetaljerComponent;
  let fixture: ComponentFixture<LaanDetaljerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaanDetaljerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaanDetaljerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
