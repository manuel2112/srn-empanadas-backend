import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),

  WEBSERVICE_URL: get("WEBSERVICE_URL").required().asString(),

  JWT_SEED: get("JWT_SEED").required().asString(),

  DB_HOST: get("DB_HOST").required().asString(),
  DB_USERNAME: get("DB_USERNAME").required().asString(),
  DB_DATABASE: get("DB_DATABASE").required().asString(),
  DB_PASSWORD: get("DB_PASSWORD").required().asString(),
};
