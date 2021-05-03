import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, zip } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { BoligRegistrer } from '../../+state/bolig.interfaces';
import { ValidatorService } from 'src/app/features/shared/validation/validator.service';

@Component({
  selector: 'app-bolig-reigstrer',
  templateUrl: './bolig-registrer.component.html',
  styleUrls: ['./bolig-registrer.component.scss'],
})
export class BoligRegistrerComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  get vejnavnValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('vejnavn'),
      {
        required: 'Du mangler at udfylde vejnavn',
      }
    );
  }

  get husnummerValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('husnummer'),
      {
        required: 'Du mangler at udfylde husnummer',
      }
    );
  }

  get postnummerValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('postnummer'),
      {
        required: 'Du mangler at udfylde postnummer',
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    public boligFacade: BoligFacade
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      zip(
        this.boligFacade.BoligIsSaved$,
        this.boligFacade.BoligHasError$
      ).subscribe((s) => {
        // No errors
        if (s[0] && !s[1]) {
          delay(1000);
          this.router.navigate(['/boliger']);
        }
      })
    );

    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onRegistrer(): void {
    const request: BoligRegistrer = {
      vejnavn: this.form.get('vejnavn').value,
      husnummer: this.form.get('husnummer').value,
      postnummer: this.form.get('postnummer').value,
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
