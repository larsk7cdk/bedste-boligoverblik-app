import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';
import {
  Banklaan,
  Laanberegning,
  LaanberegningRegistrer,
  Realkreditlaan,
  SummeringLaan,
} from '../../laanberegning/+state/laanberegning.interfaces';

export type LaanState = StateOfType<{
  behaviours: {
    saving: boolean;
    error: HttpErrorResponse | null;
  };
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
