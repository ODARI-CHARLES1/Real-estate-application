import express from "express";
import pool from "./config/db.js";
import { config } from 'dotenv';
config();


const app = express();
const PORT = process.env.PORT;
app.listen(PORT, async()=>{
    try {
        // Test connection to Neon PostgreSQL database
        const client = await pool.connect();
        console.log('Database connected successfully✅');
        client.release();
    } catch (error) {
        console.error('❌Database connection failed:', error);
        process.exit(1);
    }
    console.log("🌐 Server running on port", PORT);
    

})