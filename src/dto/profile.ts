export interface GetProfileRes {
  id: number;
  email: string;
  vendor: string;
  default_forwarding_number: string;
  balance: number;
  rating: number;
  default_country: {
    name: string;
    iso: string;
    prefix: string;
  };
  default_operator: {
    name: string;
  };
  frozen_balance: number;
}
