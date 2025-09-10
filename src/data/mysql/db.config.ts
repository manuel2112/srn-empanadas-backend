import { envs } from "../../config";

export const dbConfig = {
  HOST: envs.DB_HOST,
  USER: envs.DB_USERNAME,
  PASSWORD: envs.DB_PASSWORD,
  DB: envs.DB_DATABASE,
};
