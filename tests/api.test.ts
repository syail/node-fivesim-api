import { FiveSimApi } from "../src";

const api = new FiveSimApi({ token: process.env.TOKEN! });

api.getProfile().then((x) => console.log(x.balance));
