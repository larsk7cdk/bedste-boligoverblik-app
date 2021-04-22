import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LaanberegningOpretRequest,
  LaanberegningResponse,
} from './laanberegning.service.interfaces';

@Injectable()
export class LaanberegningService {
  constructor(private httpClient: HttpClient) {}

  getLaanberegning$(userKey: string): Observable<LaanberegningResponse> {
    const url = `${environment.apiBaseUrl}/laanberegning/${userKey}`;

    // if (!environment.production) {
    //   return this.httpClient.get<BoligResponse>(
    //     './assets/mocks/boligresponse.json'
    //   );
    // }

    return this.httpClient.get<LaanberegningResponse>(url, {
      withCredentials: true,
    });
  }

  saveLaanberegning$(
    request: LaanberegningOpretRequest
  ): Observable<LaanberegningResponse> {
    const url = `${environment.apiBaseUrl}/laanberegning/`;

    return this.httpClient.post<LaanberegningResponse>(url, request, {
      withCredentials: true,
    });
  }
}
