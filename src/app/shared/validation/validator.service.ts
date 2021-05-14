import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  getValidationMessage(
    control: AbstractControl,
    validationMessages: any
  ): string {
    if ((control.dirty || control.touched) && control.errors) {
      return Object.keys(control.errors)
        .map((key) => validationMessages[key])
        .join(' ');
    } else {
      return '';
    }
  }
}
