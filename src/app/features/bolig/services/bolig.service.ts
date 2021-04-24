import { BoligOpretRequest, BoligResponse } from './bolig.service.interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class BoligService {
  constructor(private httpClient: HttpClient) {}

  getBolig$(userKey: string): Observable<BoligResponse> {
    const url = `${environment.apiBaseUrl}/bolig/${userKey}`;

    if (!environment.production) {
      return this.httpClient
        .get<BoligResponse>('./assets/mocks/boligresponse.json')
        .pipe(delay(500));
    }

    return this.httpClient.get<BoligResponse>(url, {
      withCredentials: true,
    });
  }

  saveBolig$(request: BoligOpretRequest): Observable<BoligResponse> {
    const url = `${environment.apiBaseUrl}/bolig/`;

    return this.httpClient.post<BoligResponse>(url, request, {
      withCredentials: true,
    });
  }
}
