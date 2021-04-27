import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export enum CustomNumberExt {
  '' = '',
  'kr' = 'kr.',
  'år' = 'År'
}

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(
    value: any,
    ext: string,
    digits: string = '0.0-0'
  ): string {
    return `${this.decimalPipe.transform(value, digits)} ${ext}`;
  }
}
