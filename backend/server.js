const express = require("express");
const cors = require("cors");
const { insertUser } = require('./insert.js');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Your other middleware and route definitions...
app.post("/insert", async (req, res) => {
  // Retrieve user input from the request body
  const { firstName, lastName, phoneNumber, email, address, password } = req.body;

  // Call the insertUser function with user input data
  try {
    await insertUser(firstName, lastName, phoneNumber, email, address, password);
    res.send("User inserted successfully"); // Send response indicating success
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).send("Error inserting user"); // Send error response
  }});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
