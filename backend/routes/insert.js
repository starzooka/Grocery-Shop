const express = require('express');
const router = express.Router();
const cors = require("cors"); // Import insertUser function from database.js
const app = express();
const bcrypt = require('bcrypt')
const mysql = require('mysql2/promise');
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
// Route for inserting a user
// Route for inserting a user
router.post("/", async (req, res) => {
  // Retrieve user input from the request body
  const { firstName, lastName, phoneNumber, email, address, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  
  try {
    await db.query("INSERT INTO users (first_name, last_name, phone_number, email, address, password) VALUES (?, ?, ?, ?, ?, ?)", [firstName, lastName, phoneNumber, email, address, hash]);
    res.status(200).json('User registered.');
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).send("Error inserting user"); // Send error response
  }
});

module.exports = router;