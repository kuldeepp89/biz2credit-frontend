import { environment } from "../environments/environment";
const API_URL = {
  LOCAL: "http://localhost:8080/api/v1/",
  PROD: "/api/v1/",
};

const ENV = environment.production ? "PROD" : "LOCAL";

const url = API_URL[ENV];

export { url };
