import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type BoligState = StateOfType<{
  behaviours: {
    error: HttpErrorResponse | null;
  };
  boliger: Bolig[];
}>;

export interface Bolig {
  userKey: string;
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

export interface BoligOpret {
  userKey: string;
  vejnavn: string;
  husnummer: string;
  postnummer: number;
}
