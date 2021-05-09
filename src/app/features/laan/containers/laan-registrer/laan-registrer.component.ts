import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { first, skipWhile } from 'rxjs/operators';
import { loadLaanberegning } from 'src/app/features/laanberegning/+state/laanberegning.actions';
import { LaanberegningFacade } from 'src/app/features/laanberegning/+state/laanberegning.facade';
import { Laanberegning } from 'src/app/features/laanberegning/+state/laanberegning.interfaces';
import { LaanberegningRequest } from 'src/app/features/laanberegning/services/laanberegning.service.interfaces';
import { LaanproduktFacade } from 'src/app/features/laanprodukt/+state/laanprodukt.facade';
import { ValidatorService } from 'src/app/features/shared/validation/validator.service';
import { saveLaan } from '../../+state/laan.actions';
import { LaanFacade } from '../../+state/laan.facade';
import { LaanRegistrerRequest } from '../../services/laan.service.interfaces';

@Component({
  selector: 'app-laan-registrer',
  templateUrl: './laan-registrer.component.html',
  styleUrls: ['./laan-registrer.component.scss'],
})
export class LaanRegistrerComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  result$: Observable<Laanberegning>;

  get laanproduktValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('laanprodukt'),
      {
        required: 'Du mangler at udfylde lånprodukt',
      }
    );
  }

  get prisValidationMessage(): string {
    return this.validatorService.getValidationMessage(this.form.get('pris'), {
      required: 'Du mangler at udfylde pris',
      min: 'Pris skal være større end 0',
      max: 'Pris skal være lig med eller mindre end 10.000.000',
    });
  }

  get udbetalingValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('udbetaling'),
      {
        required: 'Du mangler at udfylde udbetaling',
        min: 'Udbetaling skal være større end 0',
        max: 'Udbetaling skal være lig med eller mindre end 10.000.000',
      }
    );
  }

  get loebetidValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('loebetid'),
      {
        required: 'Du mangler at udfylde loebetid',
        min: 'Loebetid skal være større end 0',
        max: 'Loebetid skal være lig med eller mindre end 30',
      }
    );
  }

  get afdragsfrihedValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('afdragsfrihed'),
      {
        min: 'Afdragsfrihed skal være lig med eller større end 0',
        max: 'Afdragsfrihed skal være mindre end 10',
      }
    );
  }

  get loebetidBankValidationMessage(): string {
    return this.validatorService.getValidationMessage(
      this.form.get('loebetidBank'),
      {
        min: 'Loebetid skal være lig med eller større end 0',
        max: 'Loebetid skal være lig med eller mindre end 20',
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    public laanproduktFacade: LaanproduktFacade,
    public laanberegningFacade: LaanberegningFacade,
    public laanFacade: LaanFacade
  ) {}

  ngOnInit(): void {
    this.result$ = this.laanberegningFacade.Laanberegning$;

    this._configureForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onBeregn(): void {
    if (this.form.valid) {
      const request = this._createLaanberegningRequest();

      this.laanberegningFacade.Dispatch(loadLaanberegning({ request }));
    }
  }

  onRegistrer(): void {
    let result = '';

    this.result$.pipe(first()).subscribe((s) => {
      result = JSON.stringify(s);
    });

    const request: LaanRegistrerRequest = {
      boligKey: this.laanFacade.boligKey,
      request: JSON.stringify(this._createLaanberegningRequest()),
      result,
    };

    this._addSubscribe();

    this.laanFacade.Dispatch(saveLaan({ request }));
  }

  _configureForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        laanprodukt: [Validators.required],
        pris: [
          null,
          [Validators.required, Validators.min(1), Validators.max(10000000)],
        ],
        udbetaling: [
          null,
          [Validators.required, Validators.min(1), , Validators.max(10000000)],
        ],
        loebetid: [
          null,
          [Validators.required, Validators.min(1), Validators.max(30)],
        ],
        afdragsfrihed: [null, [Validators.min(0), Validators.max(30)]],
        loebetidBank: [null, [Validators.min(0), Validators.max(20)]],
      }).controls,
      {
        updateOn: 'blur',
      }
    );
  }

  _createLaanberegningRequest(): LaanberegningRequest {
    const request: LaanberegningRequest = {
      laanprodukt: this.form.get('laanprodukt').value,
      pris: this.form.get('pris').value,
      udbetaling: this.form.get('udbetaling').value,
      loebetid: this.form.get('loebetid').value,
      afdragsfrihed:
        !!this.form.get('afdragsfrihed').value === false
          ? 0
          : this.form.get('afdragsfrihed').value,
      loebetidbank:
        !!this.form.get('loebetidBank').value === false
          ? 0
          : this.form.get('loebetidBank').value,
    };

    return request;
  }

  _addSubscribe(): void {
    if (this.subscriptions.length === 0) {
      this.subscriptions.push(
        this.laanFacade.LaanIsSaved$.subscribe((s) => {
          if (s) {
            setTimeout(() => {
              this.router.navigate(['/boliger/vis']);
            }, 500);
          }
        })
      );
    }
  }
}
