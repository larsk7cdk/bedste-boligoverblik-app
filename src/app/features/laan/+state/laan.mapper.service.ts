import { Injectable } from '@angular/core';
import { Laan, LaanRegistrer } from './laan.interfaces';
import {
  LaanRegistrerRequest,
  LaanResponse,
} from '../services/laan.service.interfaces';

@Injectable()
export class LaanMapperService {
  public mapToLaan(laanResponse: LaanResponse): Laan[] {
    return laanResponse.map(
      (m): Laan => {
        return {
          realkreditlaan: m.result['realkreditlaan'],
          banklaan: m.result['banklaan'],
        };
      }
    );
  }

  public mapToLaanRegistrerRequest(
    LaanRegistrer: LaanRegistrer
  ): LaanRegistrerRequest {
    return {
      ...LaanRegistrer,
    };
  }
}
