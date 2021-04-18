export interface BoligResponse
  extends Array<{
    userKey: string;
    addresse: string;
    x: number;
    y: number;
    partitionKey: string;
    rowKey: string;
    timestamp: Date;
    eTag: string;
  }> {}

export interface BoligOpretRequest {
  userKey: string;
  addresse: string;
  x: number;
  y: number;
  partitionKey: string;
}
