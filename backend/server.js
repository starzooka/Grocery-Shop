require('dotenv').config();
const express = require("express");
const cors = require("cors");
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  }
});

const store = new KnexSessionStore({
  knex,
  tablename: 'sessions'
});

const app = express();

const insertRouter = require("./routes/insert");
const signInRouter = require("./routes/signin");

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

app.use('/insert', insertRouter);
app.use('/signin', signInRouter);

// Add more routes and middleware as needed for future functionalities

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
