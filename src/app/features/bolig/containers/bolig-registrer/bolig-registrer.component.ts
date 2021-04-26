import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, skipWhile } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { saveBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { BoligRegistrer } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-reigstrer',
  templateUrl: './bolig-registrer.component.html',
  styleUrls: ['./bolig-registrer.component.scss'],
})
export class BoligRegistrerComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  /* getters */
  get vejnavn(): AbstractControl {
    return this.form.get('vejnavn');
  }

  get husnummer(): AbstractControl {
    return this.form.get('husnummer');
  }

  get postnummer(): AbstractControl {
    return this.form.get('postnummer');
  }

  // get carDetailsFillOutValidationMessage(): string {
  //   return this.validatorService.getValidationMessage(this.carDetailsFillOut, {
  //     required: 'Du mangler at udfylde bilinformation',
  //   });
  // }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public boligFacade: BoligFacade
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.boligFacade.BoligIsSaved$.pipe(
        skipWhile((s) => s === false),
        delay(500)
      ).subscribe(() => {
        this.router.navigate(['/boliger']);
      })
    );

    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onRegistrer(): void {
    const request: BoligRegistrer = {
      vejnavn: this.vejnavn.value,
      husnummer: this.husnummer.value,
      postnummer: this.postnummer.value,
    };

    this.boligFacade.Dispatch(saveBolig({ request }));
  }

  _configureForm(): void {
    this.form = new FormGroup(
      this.fb.group({
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
