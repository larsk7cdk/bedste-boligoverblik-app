import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type BoligState = StateOfType<{
  behaviours: {
    error: HttpErrorResponse | null;
  };
  boliger: Bolig[];
}>;

export interface Bolig {}

export interface BoligRequest {}
export interface BoligResponse {}
