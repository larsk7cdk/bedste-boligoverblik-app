// export interface LaanproduktResponse
//   extends Array<{
//     key: string;
//     value: string;
//   }> {}


export interface LaanproduktResponse {
  laanProdukter: Laanprodukt[];
}

export interface Laanprodukt {
  key: string;
  value: string;
}

