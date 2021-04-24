import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type LaanproduktState = StateOfType<{
  behaviours: {
    error: HttpErrorResponse | null;
  };
  laanprodukter: Laanprodukt[];
}>;

export interface Laanprodukt {
  key: string;
  value: string;
}
