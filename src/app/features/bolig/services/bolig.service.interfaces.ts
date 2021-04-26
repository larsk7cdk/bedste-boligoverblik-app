export interface BoligResponse
  extends Array<{
    userKey: string;
    vejnavn: string;
    husnummer: string;
    postnummer: number;
    adresse: string;
    by: string;
    x: number;
    y: number;

    partitionKey: string;
    rowKey: string;
    timestamp: Date;
    eTag: string;
  }> {}

export interface BoligRegistrerRequest {
  userKey: string;
  vejnavn: string;
  husnummer: string;
  postnummer: number;
}
