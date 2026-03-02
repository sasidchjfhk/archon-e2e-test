const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123", // HARDCODED SECRET
    database: "mydb"
});

app.get('/user', (req, res) => {
    const query = "SELECT * FROM users WHERE id = " + req.query.id; // SQL INJECTION
          db.query(query, (err, result) => {
                res.send(result);
          });
});

app.listen(3000);
