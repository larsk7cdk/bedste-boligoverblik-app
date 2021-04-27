import { stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { first, skipWhile } from 'rxjs/operators';
import { loadLaanberegning } from 'src/app/features/laanberegning/+state/laanberegning.actions';
import { LaanberegningFacade } from 'src/app/features/laanberegning/+state/laanberegning.facade';
import { Laanberegning } from 'src/app/features/laanberegning/+state/laanberegning.interfaces';
import { LaanberegningRequest } from 'src/app/features/laanberegning/services/laanberegning.service.interfaces';
import { loadLaanprodukt } from 'src/app/features/laanprodukt/+state/laanprodukt.actions';
import { LaanproduktFacade } from 'src/app/features/laanprodukt/+state/laanprodukt.facade';
import { saveLaan } from '../../+state/laan.actions';
import { LaanFacade } from '../../+state/laan.facade';
import { LaanRegistrerRequest } from '../../services/laan.service.interfaces';

@Component({
  selector: 'app-laan-registrer',
  templateUrl: './laan-registrer.component.html',
  styleUrls: ['./laan-registrer.component.scss'],
})
export class LaanRegistrerComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];

  result$: Observable<Laanberegning>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public laanproduktFacade: LaanproduktFacade,
    public laanberegningFacade: LaanberegningFacade,
    public laanFacade: LaanFacade
  ) {}

  ngOnInit(): void {
    this.result$ = this.laanberegningFacade.Laanberegning$;

    this.laanproduktFacade.Dispatch(loadLaanprodukt());

    this._configureForm();
  }

  onBeregn(): void {
    if (this.form.valid) {
      const request = this._createLaanberegningRequest();

      console.log('request', request);
      this.laanberegningFacade.Dispatch(loadLaanberegning({ request }));
    }
  }

  onRegistrer(): void {
    let result = '';

    this.result$.pipe(first()).subscribe((s) => {
      result = JSON.stringify(s);
    });

    const request: LaanRegistrerRequest = {
      boligKey: 'lars',
      request: JSON.stringify(this._createLaanberegningRequest()),
      result,
    };
    this.laanFacade.Dispatch(saveLaan({ request }));
  }

  _configureForm(): void {
    this.form = new FormGroup(
      this.fb.group({
        laanprodukt: [],
        pris: [
          '',
          [Validators.required, Validators.min(0), Validators.max(10000000)],
        ],
        udbetaling: ['', [Validators.required, Validators.min(0)]],
        loebetid: [
          '',
          [Validators.required, Validators.min(0), Validators.max(30)],
        ],
        afdragsfrihed: ['', [Validators.min(0), Validators.max(30)]],
        loebetidBank: ['', [Validators.min(0), Validators.max(20)]],
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
      afdragsfrihed: this.form.get('afdragsfrihed').value,
      loebetidbank: this.form.get('loebetidBank').value,
    };

    return request;
  }
}
