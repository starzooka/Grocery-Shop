const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log(req.session.userId)
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const pool = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    });

    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.session.userId]);

    const userData = rows[0];
    console.log(userData);
    return res.status(200).json(userData);
  } catch (error) {
    console.error('Account page error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;