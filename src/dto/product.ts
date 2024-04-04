export interface GetProductRes {
  [key: string]: {
    Category: string;
    Qty: number;
    Price: number;
  };
}

export interface GetPricesByProductRes {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        cost: number;
        count: number;
        rate: number;
      };
    };
  };
}
