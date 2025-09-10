import mysql from "mysql2";
import { dbConfig } from "./db.config";

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

export const dbMysql = pool.promise();
