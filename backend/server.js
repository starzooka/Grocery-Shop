require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');

const app = express();

const insertRouter = require("./routes/insert");
const signInRouter = require("./routes/signin");
const accountRouter = require("./routes/account");
const productsRouter = require("./routes/products"); // Import the products route
const cartRouter = require("./routes/cart"); // Import the cart route

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const createConnection = async () => {
  const db = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  return db;
};

app.use('/insert', insertRouter);
app.use('/signin', signInRouter);
app.use('/account', accountRouter);
app.use('/products', productsRouter); // Use the products route
app.use('/cart', cartRouter); // Use the cart route

// Add more routes and middleware as needed for future functionalities

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
