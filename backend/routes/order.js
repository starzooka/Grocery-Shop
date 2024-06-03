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
    const { user_id, total_amount, items } = req.body;
  
    let connection;
  
    try {
      connection = await pool.getConnection();
  
      // Start a transaction
      await connection.beginTransaction();
  
      // Insert into orders table
      const [orderResult] = await connection.query(
        'INSERT INTO orders (user_id, total_amount) VALUES (?, ?)',
        [user_id, total_amount]
      );
  
      // Get the generated order_id
      const order_id = orderResult.insertId;
  
      // Insert into order_det table for each item
      const orderDetailsPromises = items.map(item => {
        return connection.query(
          'INSERT INTO order_det (order_id, user_id, product_id, product_quantity, item_total) VALUES (?, ?, ?, ?, ?)',
          [order_id, user_id, item.product_id, item.product_quantity, item.item_total]
        );
      });
  
      await Promise.all(orderDetailsPromises);
  
      // Commit the transaction
      await connection.commit();
  
      res.status(200).json({ message: 'Items added to orders successfully.' });
    } catch (error) {
      if (connection) {
        // Rollback the transaction in case of error
        await connection.rollback();
      }
  
      console.error('Error adding order:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      if (connection) {
        // Release the connection
        connection.release();
      }
    }
  });
  

  router.delete('/cancel', async (req, res) => {
    const { user_id, order_id } = req.body;
  
    let connection;
  
    try {
      connection = await pool.getConnection();
  
      // Start a transaction
      await connection.beginTransaction();
  
      // Delete from order_det table
      await connection.query(
        'DELETE FROM order_det WHERE order_id = ? AND user_id = ?',
        [order_id, user_id]
      );
  
      // Delete from orders table
      await connection.query(
        'DELETE FROM orders WHERE order_id = ? AND user_id = ?',
        [order_id, user_id]
      );
  
      // Commit the transaction
      await connection.commit();
  
      res.status(200).json({ message: 'Order canceled successfully.' });
    } catch (error) {
      if (connection) {
        // Rollback the transaction in case of error
        await connection.rollback();
      }
  
      console.error('Error canceling order:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      if (connection) {
        // Release the connection
        connection.release();
      }
    }
  });

  router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    let connection;

    try {
        connection = await pool.getConnection();

        // Query to fetch the order details
        const [rows] = await connection.query(
            `SELECT 
                o.order_id,
                o.total_amount,
                GROUP_CONCAT(DISTINCT p.name) AS product_names,
                SUM(od.item_total) AS total_amount,
                SUM(od.product_quantity) AS total_quantity
            FROM orders o
            JOIN order_det od ON o.order_id = od.order_id
            JOIN products p ON od.product_id = p.id
            WHERE o.user_id = ?
            GROUP BY o.order_id`,
            [user_id]
        );

        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        if (connection) {
            connection.release();
        }
    }
});

module.exports = router;
