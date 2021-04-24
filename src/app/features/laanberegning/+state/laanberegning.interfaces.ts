import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type LaanberegningState = StateOfType<{
  behaviours: {
    error: HttpErrorResponse | null;
  };
  laanberegning: Laanberegning;
}>;

export interface Laanberegning {
  userKey: string;
  partitionKey: string;
  rowKey: string;
  timestamp: Date;
}
