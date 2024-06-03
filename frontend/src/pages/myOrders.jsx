import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userData.id;

  useEffect(() => {
    fetchOrders(userId);
  }, [userId]);

  const fetchOrders = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/order/${userId}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:5000/order/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          order_id: orderId,
        }),
      });
      if (response.ok) {
        // Reload orders after successful cancellation
        fetchOrders(userId);
      } else {
        console.error('Failed to cancel order');
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>
      {orders.map((order) => (
        <Paper key={order.order_id} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Order ID: {order.order_id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total Amount: Rs. {order.total_amount}
          </Typography>
          {Object.keys(order).map((key) => (
            key !== 'order_id' && key !== 'total_amount' &&
            <Typography variant="body2" key={key}>
              {key.replace('_', ' ')}: {order[key]}
            </Typography>
          ))}
          <Button
            variant="contained"
            color="error"
            onClick={() => cancelOrder(order.order_id)}
            style={{ marginTop: '10px' }}
          >
            Cancel Order
          </Button>
        </Paper>
      ))}
    </div>
  );
}
