const express = require('express');
const router = express.Router();
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
app.use(express.json());
require('dotenv').config();
// Enable CORS for all routes
app.use(cors());

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const email = 'tom.h01@mail.com';
const pass = '11111111';

router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.query('SELECT password FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            const hashedPassword = rows[0].password;
            const match = await bcrypt.compare(pass, hashedPassword);
            console.log(match);
            res.send({ match });
        } else {
            console.log("User not found");
            res.send({ match: false });
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = router;