import { Injectable } from '@angular/core';
import { Laan, LaanRegistrer } from './laan.interfaces';
import {
  LaanRegistrerRequest,
  LaanResponse,
} from '../services/laan.service.interfaces';
import { LaanberegningRegistrer } from '../../laanberegning/+state/laanberegning.interfaces';

@Injectable()
export class LaanMapperService {
  public mapToLaan(laanResponse: LaanResponse): Laan[] {
    return laanResponse.map(
      (m): Laan => {
        return {
          laanberegning: m.request["laanberegning"],
          realkreditlaan: m.result['realkreditlaan'],
          banklaan: m.result['banklaan'],
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
