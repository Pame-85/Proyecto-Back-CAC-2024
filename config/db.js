import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({path:'.env'})

const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ', err);
        return;
    }
    console.log('Connected to the database.');
});

export default connection;
