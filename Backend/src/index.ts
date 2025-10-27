import express from "express";
import pool from "./config/db.js";
import { config } from 'dotenv';
config();


const app = express();
const PORT = process.env.PORT;

app.listen(PORT, async()=>{
    //await connection to neon postgre database
    const dbconnect = await pool.connect();
    try {
      if (dbconnect) {
        console.log("Database successfully connected ✅");
        console.log("🌐 Server running on port",PORT)
      } else {
        console.log("Error connecting to the database ❌");
      };  
    }catch (error) {
       console.log("Error setting up the server❌", error);
    }
    

})