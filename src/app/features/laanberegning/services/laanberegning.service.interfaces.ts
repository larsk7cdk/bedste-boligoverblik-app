export interface LaanberegningRequest {
  laanprodukt: string;
  pris: string;
  udbetaling: string;
  loebetid: string;
  afdragsfrihed: string;
  loebetidbank: string;
}

export interface LaanberegningResponse {
  laanproduktNavn: string;
  realkreditlaan: Realkreditlaan;
  banklaan: Banklaan;
  summeringLaan: SummeringLaan;
}

export interface Realkreditlaan extends Basislaan {
  afdragsfrihedAar: number;
}

export interface Banklaan extends Basislaan {}

export interface SummeringLaan {
  restgaeld: number;
  mdlYdelseFoerSkat: number;
  mdlYdelseEfterSkat: number;
  mdlAfdrag: number;
  tilbagebetaling: number;
}

export interface Basislaan {
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
