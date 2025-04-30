import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


const db = mysql.createPool({
    host: process.env.DB_HOST,    // Database host
    user: process.env.DB_USER,    // Database user
    password: process.env.DB_PASSWORD, // Database password
    database: process.env.DB_NAME, // Database name
});

export default db;