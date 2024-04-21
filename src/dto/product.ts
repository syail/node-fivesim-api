export interface GetProductRes {
  [key: string]: {
    Category: string;
    Qty: number;
    Price: number;
  };
}

export interface GetPricesByProductRes {
  /**
   * Service
   */
  [key: string]: {
    /**
     * Country
     */
    [key: string]: {
      /**
       * Operator
       */
      [key: string]: {
        cost: number;
        count: number;
        rate: number;
      };
    };
  };
}
