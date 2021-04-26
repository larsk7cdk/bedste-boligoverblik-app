import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LaanberegningRequest,
  LaanberegningResponse,
} from './laanberegning.service.interfaces';

@Injectable()
export class LaanberegningService {
  constructor(private httpClient: HttpClient) {}

  getLaanberegningJyskeBank$(
    request: LaanberegningRequest
  ): Observable<LaanberegningResponse> {
    const url = `${environment.apiBaseUrl}/laanberegning/jyskebank?laanprodukt=${request.laanprodukt}&pris=${request.pris}&udbetaling=${request.udbetaling}&loebetid=${request.loebetid}&afdragsfrihed=${request.afdragsfrihed}&loebetidBank=${request.loebetidbank}`;

    if (!environment.production) {
      return this.httpClient.get<LaanberegningResponse>(
        './assets/mocks/laanberegningresponse.json'
      );
    }

    return this.httpClient.get<LaanberegningResponse>(url, {
      withCredentials: true,
    });
  }
}
