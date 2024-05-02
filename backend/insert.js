require('dotenv').config();
const mysql = require('mysql2/promise'); // Import mysql2 with promise support

// Function to insert a user into the database
async function insertUser(firstName, lastName, phoneNumber, email, address, password) {
  const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  try {
    // Execute the INSERT query
    const [result] = await pool.query("INSERT INTO users (first_name, last_name, phone_number, email, address, password) VALUES (?, ?, ?, ?, ?, ?)", [firstName, lastName, phoneNumber, email, address, password]);

    console.log('User inserted successfully. Affected rows:', result.affectedRows);
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error; // Rethrow the error to handle it in the calling function
  } finally {
    // Close the pool to release connections
    pool.end();
  }
}

module.exports = { insertUser };
