import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaanRegistrerRequest } from './laan.service.interfaces';
import { LaanRegistrer } from '../+state/laan.interfaces';

@Injectable()
export class LaanService {
  constructor(private httpClient: HttpClient) {}

  // getLaan$(request: LaanRegistrerRequest): Observable<> {
  //   const url = `${environment.apiBaseUrl}/laanberegning/${userKey}`;

  //   // if (!environment.production) {
  //   //   return this.httpClient.get<BoligResponse>(
  //   //     './assets/mocks/boligresponse.json'
  //   //   );
  //   // }

  //   return this.httpClient.get<LaanberegningResponse>(url, {
  //     withCredentials: true,
  //   });
  // }

  saveLaan$(request: LaanRegistrerRequest): Observable<void> {
    const url = `${environment.apiBaseUrl}/laan`;

    return this.httpClient.post<void>(url, request, {
      withCredentials: true,
    });
  }
}
