import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  password: "password",
  user: "abid",
});