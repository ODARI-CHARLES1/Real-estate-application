import { Pool } from 'pg';
import { config } from 'dotenv';
import assert from 'assert';

config();

assert(process.env.DATABASE_URL, "DATABASE URL IS REQUIRED❌")

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized: false
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

export default pool;