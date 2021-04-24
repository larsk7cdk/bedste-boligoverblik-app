import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type LaanberegningState = StateOfType<{
  behaviours: {
    saving: boolean;
    error: HttpErrorResponse | null;
  };
  laanberegninger: Laanberegning[];
}>;

export interface Laanberegning {
  userKey: string;
  partitionKey: string;
  rowKey: string;
  timestamp: Date;
}

export interface LaanberegningOpret {
  userKey: string;
}
