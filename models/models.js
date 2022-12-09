import { pool } from "../db/index.js";

export async function getToys() {
  const data = await pool.query("SELECT * FROM toys;");
  console.log("The toys list is", data.rows);
  return data.rows;
}

export async function postToy(item) {
  const { title, imageURL, age } = item;
  const data = await pool.query(
    `INSERT INTO toys (
      title,
      imageURL,
      age
    ) VALUES ($1,$2,$3) RETURNING *;`,
    [title, imageURL, age]
  );
  return data.rows[0];
}