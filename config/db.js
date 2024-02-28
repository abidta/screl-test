import mysql from "mysql2";
import { createTable } from "../sql/queries.js";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: "sample",
});
export const creteUserTable = async () => {
  try {
    db.execute(createTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  } catch (error) {
    throw error;
  }
};
