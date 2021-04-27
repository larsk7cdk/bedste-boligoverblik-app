export interface LaanRequest {
  boligKey: string;
  request: string;
  result: string;
}

export interface LaanResponse
  extends Array<{
    boligKey: string;
    request: string;
    result: string;
  }> {}

export interface LaanRegistrerRequest {
  boligKey: string;
  request: string;
  result: string;
}
