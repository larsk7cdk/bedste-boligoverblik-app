export interface BoligResponse
  extends Array<{
    userKey: string;
    adresse: string;
    x: number;
    y: number;
    partitionKey: string;
    rowKey: string;
    timestamp: Date;
    eTag: string;
  }> {}

export interface BoligOpretRequest {
  userKey: string;
  adresse: string;
  x: number;
  y: number;
  partitionKey: string;
}
