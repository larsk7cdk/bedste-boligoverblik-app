import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaanRegistrerRequest, LaanResponse } from './laan.service.interfaces';

@Injectable()
export class LaanService {
  constructor(private httpClient: HttpClient) {}

  getLaan$(boligKey: string): Observable<LaanResponse> {
    const url = `${environment.apiBaseUrl}/laan/${boligKey}`;

    if (!environment.production) {
      return this.httpClient.get<LaanResponse>(
        './assets/mocks/laanresponse.json'
      );
    }

    return this.httpClient.get<LaanResponse>(url, {
      withCredentials: true,
    });
  }

  saveLaan$(request: LaanRegistrerRequest): Observable<void> {
    const url = `${environment.apiBaseUrl}/laan`;

    return this.httpClient.post<void>(url, request, {
      withCredentials: true,
    });
  }
}
