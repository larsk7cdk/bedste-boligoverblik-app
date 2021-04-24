export interface LaanberegningResponse
  extends Array<{
    userKey: string;

    partitionKey: string;
    rowKey: string;
    timestamp: Date;
    eTag: string;
  }> {}

export interface LaanberegningOpretRequest {
  userKey: string;
}
