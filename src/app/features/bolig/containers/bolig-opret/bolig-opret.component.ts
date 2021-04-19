import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { saveBolig } from '../../+state/bolig.actions';
import { BoligFacade } from '../../+state/bolig.facade';
import { BoligOpret } from '../../+state/bolig.interfaces';

@Component({
  selector: 'app-bolig-opret',
  templateUrl: './bolig-opret.component.html',
  styleUrls: ['./bolig-opret.component.scss'],
})
export class BoligOpretComponent implements OnInit {
  form: FormGroup = new FormGroup({});

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

  constructor(private fb: FormBuilder, public boligFacade: BoligFacade) {}

  ngOnInit(): void {
    this._configureForm();
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
