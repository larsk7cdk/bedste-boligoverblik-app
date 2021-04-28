import { Injectable } from '@angular/core';
import { Laan, LaanRegistrer } from './laan.interfaces';
import {
  LaanRegistrerRequest,
  LaanResponse,
} from '../services/laan.service.interfaces';
import {
  Banklaan,
  LaanberegningRegistrer,
  Realkreditlaan,
} from '../../laanberegning/+state/laanberegning.interfaces';
import { LaanproduktFacade } from '../../laanprodukt/+state/laanprodukt.facade';

@Injectable()
export class LaanMapperService {
  constructor(private laanproduktFacade: LaanproduktFacade) {}

  public mapToLaan(laanResponse: LaanResponse): Laan[] {
    return laanResponse.map(
      (m): Laan => {
        const laanberegning: LaanberegningRegistrer =
          m.request['laanberegning'];
        const realkreditlaan: Realkreditlaan = m.result['realkreditlaan'];
        const banklaan: Banklaan = m.result['banklaan'];

        const laanprodukt = this.laanproduktFacade.Laanprodukt(
          laanberegning.laanprodukt
        ).value;

        const samletMaanedligYdelseFoerSkat =
          realkreditlaan.mdlYdelseFoerSkat + banklaan.mdlYdelseFoerSkat;

        return {
          laanprodukt,
          samletMaanedligYdelseFoerSkat,
          laanberegning: laanberegning,
          realkreditlaan: realkreditlaan,
          banklaan: banklaan,
        };
      }
    );
  }

  public mapToLaanRegistrerRequest(
    laanRegistrer: LaanRegistrer
  ): LaanRegistrerRequest {
    return {
      ...laanRegistrer,
    };
  }
}
