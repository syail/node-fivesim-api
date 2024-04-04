import axios, { AxiosInstance } from "axios";
import { GetPricesByProductRes, GetProductRes, GetProfileRes } from "./dto";

const FIVESIM_API_HOST = "https://5sim.net";

export class FiveSimApi {
  private _client: AxiosInstance;

  constructor(config: ApiConfig) {
    this._client = axios.create({
      baseURL: FIVESIM_API_HOST,
      headers: {
        Authorization: `Bearer ${config.token}`,
        Accept: "application/json",
      },
    });
  }

  async getProfile() {
    const res = await this._client.get<GetProfileRes>("/v1/user/profile");

    return res.data;
  }

  async getProducts(country: string = "any", operator: string = "any") {
    const res = await this._client.get<GetProductRes>(`/v1/guest/products/${country}/${operator}`);

    return res.data;
  }

  async getPricesByProduct(product: string) {
    const res = await this._client.get<GetPricesByProductRes>(`/v1/guest/prices?product=${product}`);

    return res.data;
  }
}

interface ApiConfig {
  token: string;
}
