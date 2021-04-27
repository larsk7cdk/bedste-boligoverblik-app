import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';
import { Banklaan, LaanberegningRegistrer, Realkreditlaan } from '../../laanberegning/+state/laanberegning.interfaces';

export type LaanState = StateOfType<{
  behaviours: {
    saving: boolean;
    error: HttpErrorResponse | null;
  };
  laan: Laan[];
}>;

export interface Laan {
  laanberegning: LaanberegningRegistrer;
  realkreditlaan: Realkreditlaan;
  banklaan: Banklaan;
}

export interface LaanRegistrer {
  boligKey: string;
  request: string;
  result: string;
}
