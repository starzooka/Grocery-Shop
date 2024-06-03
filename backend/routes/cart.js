const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Route for adding an item to the cart
router.post('/', async (req, res) => {
    const { product_id, user_id, product_quantity, item_total } = req.body;
  
    try {
      const connection = await pool.getConnection();
  
      // Check if the item already exists in the cart
      const [existingCartItem] = await connection.query('SELECT * FROM cart WHERE product_id = ? AND user_id = ?', [product_id, user_id]);
  
      if (existingCartItem.length > 0) {
        // If the item already exists, update its quantity and item_total
        await connection.query('UPDATE cart SET product_quantity = ?, item_total = ? WHERE product_id = ? AND user_id = ?', [product_quantity, item_total, product_id, user_id]);
      } else {
        // If the item doesn't exist, insert a new row for it
        await connection.query('INSERT INTO cart (product_id, user_id, product_quantity, item_total) VALUES (?, ?, ?, ?)', [product_id, user_id, product_quantity, item_total]);
      }
  
      connection.release();
      res.status(200).json({ message: 'Item added to cart successfully.' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  // Route for getting quantity of a specific product in the cart for a user
router.get('/:user_id/:product_id', async (req, res) => {
    const { user_id, product_id } = req.params;

    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.query('SELECT product_quantity FROM cart WHERE product_id = ? AND user_id = ?', [product_id, user_id]);
        connection.release();

        if (rows.length > 0) {
            // If the product exists in the cart, return its quantity
            res.status(200).json({ quantity: rows[0].product_quantity });
        } else {
            // If the product doesn't exist in the cart, return 0
            res.status(200).json({ quantity: 0 });
        }
    } catch (error) {
        console.error('Error fetching cart quantity:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Route for getting product details and quantities ordered by a user
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query(
      'SELECT p.id, p.name, p.price, p.image, c.product_quantity, c.item_total FROM products p INNER JOIN cart c ON p.id = c.product_id WHERE c.user_id = ?',
      [user_id]
    );
    connection.release();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for deleting an item from the cart
router.delete('/:user_id/:product_id', async (req, res) => {
    const { user_id, product_id } = req.params;
  
    try {
      const connection = await pool.getConnection();
      await connection.query('DELETE FROM cart WHERE product_id = ? AND user_id = ?', [product_id, user_id]);
      connection.release();
      res.status(200).json({ message: 'Item deleted from cart successfully.' });
    } catch (error) {
      console.error('Error deleting item from cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  

module.exports = router;
