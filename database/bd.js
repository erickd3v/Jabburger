import mysql from "mysql2/promise";

export const dbConfig = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "Jabburger",
  port: "3307",
});

try {
  const [rows] = await dbConfig.query("SELECT * FROM `users`");
  console.log(rows);
} catch (err) {
  console.log(err);
}
