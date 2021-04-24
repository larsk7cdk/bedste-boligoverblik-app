import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaanberegningFacade } from '../../+state/laanberegning.facade';

@Component({
  selector: 'app-laanberegning-opret',
  templateUrl: './laanberegning-opret.component.html',
  styleUrls: ['./laanberegning-opret.component.scss'],
})
export class LaanberegningOpretComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  get vejnavn(): AbstractControl {
    return this.form.get('vejnavn');
  }

  get husnummer(): AbstractControl {
    return this.form.get('husnummer');
  }

  get postnummer(): AbstractControl {
    return this.form.get('postnummer');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public laanberegningFacade: LaanberegningFacade
  ) {}

  ngOnInit(): void {
    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onOpret(): void {

  }

  _configureForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        user: ['', Validators.required],
        vejnavn: ['', Validators.required],
        husnummer: ['', Validators.required],
        postnummer: ['', Validators.required],
      }).controls,
      {
        updateOn: 'blur',
      }
    );
  }
}
