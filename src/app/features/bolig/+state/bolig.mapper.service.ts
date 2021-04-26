import { Injectable } from '@angular/core';
import {
  BoligRegistrerRequest,
  BoligResponse,
} from '../services/bolig.service.interfaces';
import { Bolig, BoligRegistrer } from './bolig.interfaces';

@Injectable()
export class BoligMapperService {
  public mapToBolig(boligResponse: BoligResponse): Bolig[] {
    return boligResponse.map(
      (m): Bolig => {
        return {
          vejnavn: m.vejnavn,
          husnummer: m.husnummer,
          postnummer: m.postnummer,
          adresse: m.adresse,
          x: m.x,
          y: m.y,
          partitionKey: m.partitionKey,
          rowKey: m.rowKey,
          timestamp: m.timestamp,
        };
      }
    );
  }

  public mapToBoligOpretRequest(
    boligRegistrer: BoligRegistrer
  ): BoligRegistrerRequest {
    return {
      userKey: 'lars',
      ...boligRegistrer,
    };
  }
}
