import { BoligRequest, BoligResponse } from './bolig.service.interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BoligService {
  constructor(private httpClient: HttpClient) {}

  getBolig$(request: BoligRequest): Observable<BoligResponse> {
    const url = `${environment.apiBaseUrl}/${request}`;

    return this.httpClient.get<BoligResponse>(url, {
      withCredentials: true,
    });
  }
}
