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

@Injectable()
export class LaanMapperService {
  public mapToLaan(laanResponse: LaanResponse): Laan[] {
    return laanResponse.map(
      (m): Laan => {
        const laanberegningRegistrer: LaanberegningRegistrer = JSON.parse(
          m.request
        );
        const laanproduktNavn = JSON.parse(m.result)['laanproduktNavn'];
        const realkreditlaan: Realkreditlaan = JSON.parse(m.result)[
          'realkreditlaan'
        ];
        const banklaan: Banklaan = JSON.parse(m.result)['banklaan'];
        const summeringLaan: Banklaan = JSON.parse(m.result)['summeringLaan'];

        return {
          laanberegningRegistrer,
          laanberegning: {
            laanproduktNavn,
            realkreditlaan,
            banklaan,
            summeringLaan,
          },
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
