import { Injectable } from '@angular/core';
import {
  LaanberegningRequest,
  LaanberegningResponse,
} from '../services/laanberegning.service.interfaces';
import {
  Laanberegning,
  LaanberegningRegistrer,
} from './laanberegning.interfaces';

@Injectable()
export class LaanberegningMapperService {
  public mapToLaanberegning(
    laanberegningResponse: LaanberegningResponse
  ): Laanberegning {
    return { ...laanberegningResponse };
  }

  public mapToLaanberegningRequest(
    laanberegningRegistrer: LaanberegningRegistrer
  ): LaanberegningRequest {
    return { ...laanberegningRegistrer };
  }
}
