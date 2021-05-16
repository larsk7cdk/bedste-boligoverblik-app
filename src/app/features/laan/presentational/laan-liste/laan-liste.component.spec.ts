import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LaanListeComponent } from './laan-liste.component';

describe('Laan liste Component', () => {
  let component: LaanListeComponent;
  let fixture: ComponentFixture<LaanListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaanListeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaanListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an title', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const queryEl = debugEl.query(By.css('h3'));
    const element: HTMLElement = queryEl.nativeElement;
    expect(element.textContent).toEqual('Lån');
  });
});
