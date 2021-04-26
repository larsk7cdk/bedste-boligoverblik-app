import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type BoligState = StateOfType<{
  behaviours: {
    saving: boolean;
    error: HttpErrorResponse | null;
  };
  boligSelected: Bolig;
  boliger: Bolig[];
}>;

export interface Bolig {
  vejnavn: string;
  husnummer: string;
  postnummer: number;
  adresse: string;
  x: number;
  y: number;
  partitionKey: string;
  rowKey: string;
  timestamp: Date;
}

export interface BoligRegistrer {
  vejnavn: string;
  husnummer: string;
  postnummer: number;
}
