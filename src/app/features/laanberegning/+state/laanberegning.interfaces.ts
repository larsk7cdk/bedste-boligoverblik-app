import { HttpErrorResponse } from '@angular/common/http';
import { StateOfType } from 'src/shared/store/common';

export type LaanberegningState = StateOfType<{
  behaviours: {
    error: HttpErrorResponse | null;
  };
  laanberegning: Laanberegning;
}>;

export interface Laanberegning {
  realkreditlaan: Realkreditlaan;
  banklaan: Banklaan;
}

export interface Realkreditlaan {
  afdragsfrihedAar: number;
  restgaeld: number;
  loebetid: number;
  mdlYdelseFoerSkat: number;
  mdlYdelseEfterSkat: number;
  mdlAfdrag: number;
  tilbagebetaling: number;
  aaopFoerSkatPct: number;
  aaopEfterSkatPct: number;
  debitorRentePct: number;
  betalinger: Betalinger[];
}

export interface Banklaan {
  restgaeld: number;
  loebetid: number;
  mdlYdelseFoerSkat: number;
  mdlYdelseEfterSkat: number;
  mdlAfdrag: number;
  tilbagebetaling: number;
  aaopFoerSkatPct: number;
  aaopEfterSkatPct: number;
  debitorRentePct: number;
  betalinger: Betalinger[];
}

export interface Betalinger {
  dato: string;
  ydelseFoerSkat: number;
  ydelseEfterSkat: number;
  afdrag: number;
  renter: number;
  restgaeld: number;
}
