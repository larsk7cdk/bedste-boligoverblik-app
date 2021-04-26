import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaanproduktResponse } from './laanprodukt.service.interface';

@Injectable()
export class LaanproduktService {
  constructor(private httpClient: HttpClient) {}

  getLaanprodukter$(): Observable<LaanproduktResponse> {
    const url = `${environment.apiBaseUrl}/LaanProdukt/jyskebank`;

    return this.httpClient.get<LaanproduktResponse>(url, {
      withCredentials: true,
    });
  }
}
