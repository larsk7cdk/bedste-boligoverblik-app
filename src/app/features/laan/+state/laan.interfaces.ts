import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type LaanState = StateOfType<{
  behaviours: {
    saving: boolean;
    error: HttpErrorResponse | null;
  };
  laan: Laan[];
}>;

export interface Laan {
  userKey: string;
  partitionKey: string;
  rowKey: string;
  timestamp: Date;
}

export interface LaanOpret {
  userKey: string;
}
