import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from '../../../shared/store/common';
import {
  Laanberegning,
  LaanberegningRegistrer,
} from '../../laanberegning/+state/laanberegning.interfaces';

export type LaanState = StateOfType<{
  behaviours: {
    saving: boolean;
    saved: boolean;
    error: HttpErrorResponse | null;
  };
  boligKey: string;
  laan: Laan[];
}>;

export interface Laan {
  laanberegningRegistrer: LaanberegningRegistrer;
  laanberegning: Laanberegning;
}

export interface LaanRegistrer {
  boligKey: string;
  request: string;
  result: string;
}
