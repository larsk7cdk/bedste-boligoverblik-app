import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidatorService } from 'src/app/features/shared/validation/validator.service';
import { saveBolig, saveBoligInit } from '../../+state/bolig.actions';
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
    this.boligFacade.Dispatch(saveBoligInit());
    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onRegistrer(): void {
    this._addSubscribe();

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

  _addSubscribe(): void {
    if (this.subscriptions.length === 0) {
      this.subscriptions.push(
        this.boligFacade.BoligIsSaved$.subscribe((s) => {
          setTimeout(() => {
            this.router.navigate(['/boliger']);
          }, 500);
        })
      );
    }
  }
}
