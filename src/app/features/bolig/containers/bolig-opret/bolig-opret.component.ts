import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay, first, skipWhile, takeUntil, takeWhile } from 'rxjs/operators';
import { saveBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { BoligOpret } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-opret',
  templateUrl: './bolig-opret.component.html',
  styleUrls: ['./bolig-opret.component.scss'],
})
export class BoligOpretComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  /* getters */
  /* FJERNES NÅR LOGIN ER PÅ PLADS */
  get user(): AbstractControl {
    return this.form.get('user');
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
        this.router.navigate(['/boliger/oversigt']);
      })
    );

    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onOpret(): void {
    const request: BoligOpret = {
      userKey: this.user.value,
      vejnavn: this.vejnavn.value,
      husnummer: this.husnummer.value,
      postnummer: this.postnummer.value,
    };

    this.boligFacade.Dispatch(saveBolig({ request }));
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
