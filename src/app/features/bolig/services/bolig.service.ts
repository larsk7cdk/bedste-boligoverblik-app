import { BoligResponse } from './bolig.service.interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BoligService {
  constructor(private httpClient: HttpClient) {}

  getBolig$(userKey: string): Observable<BoligResponse> {
    const url = `${environment.apiBaseUrl}/bolig/${userKey}`;

    if (!environment.production) {
      return this.httpClient.get<BoligResponse>(
        './assets/mocks/boligresponse.json'
      );
    }

    return this.httpClient.get<BoligResponse>(url, {
      withCredentials: true,
    });
  }
}
