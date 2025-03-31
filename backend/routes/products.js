const express = require('express');
const router = express.Router();
require('dotenv').config();
const mysql = require('mysql2/promise');

const createConnection = async () => {
    try {
        console.log("Attempting to connect to MySQL...");
        console.log("DB CONFIG:", process.env.HOST, process.env.USER, process.env.DATABASE);

        const db = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT || 3306
        });

        console.log("✅ MySQL Connection Successful!");
        return db;
    } catch (error) {
        console.error("❌ Database Connection Error:", error);
        throw error;
    }
};

// Fetch all products
router.get('/fetch', async (req, res) => {
  try {
    const db = await createConnection();
    const [rows] = await db.execute('SELECT * FROM products');
    await db.end();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Fetch product by name
router.get('/fetchByName', async (req, res) => {
  const productName = req.query.name;
  if (!productName) {
    return res.status(400).json({ message: 'Product name is required' });
  }

  try {
    const db = await createConnection();
    const [rows] = await db.execute('SELECT * FROM products WHERE name = ?', [productName]);
    await db.end();

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(rows[0]); // Assuming you want to return a single product object
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/fetchByCategory', async (req, res) => {
  const productCategory = req.query.category_id;
  if (!productCategory) {
    return res.status(400).json({ message: 'Category is required' });
  }

  try {
    const db = await createConnection();
    const [rows] = await db.execute('SELECT * FROM products WHERE category_id = ?', [productCategory]);
    await db.end();

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(rows); // Assuming you want to return a single product object
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
