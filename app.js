const express = require('express');
const app = express();
const mysql = require('mysql');

// VULNERABILITY: Hardcoded secrets
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "super_secret_password_123", 
  database: "mydb"
});

// VULNERABILITY: SQL Injection
app.get('/user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id; 
  db.query(query, (err, result) => {
    res.send(result);
  });
});

app.listen(3000);
