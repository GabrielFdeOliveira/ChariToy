import pg from "pg";
import * as dotenv from 'dotenv';
import { db } from "../config/index.js";

const databaseURL = process.env.DATABASE_URL;

export const pool = new pg.Pool({
  connectionString: databaseURL,
  ssl: {
    rejectUnauthorized: false,
  },
});