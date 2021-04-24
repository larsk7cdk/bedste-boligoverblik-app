import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { loadLaanprodukt } from 'src/app/features/laanprodukt/+state/laanprodukt.actions';
import { LaanproduktFacade } from 'src/app/features/laanprodukt/+state/laanprodukt.facade';
import { LaanFacade } from '../../+state/laan.facade';

@Component({
  selector: 'app-laan-opret',
  templateUrl: './laan-opret.component.html',
  styleUrls: ['./laan-opret.component.scss'],
})
export class LaanOpretComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  get laanprodukt(): AbstractControl {
    return this.form.get('laanprodukt');
  }

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
    public laanproduktFacade: LaanproduktFacade,
    public laanFacade: LaanFacade
  ) {}

  ngOnInit(): void {
    this.laanproduktFacade.Dispatch(loadLaanprodukt());

    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onOpret(): void {
    console.log(this.laanprodukt.value);
  }

  _configureForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        laanprodukt: [],
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
