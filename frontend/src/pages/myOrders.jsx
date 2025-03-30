import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from '@mui/material/Box';

export default function MyOrders() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userData?.id;

  useEffect(() => {
    if (!userData) {
      navigate('/signIn');
    } else {
      fetchOrders(userId);
    }
  }, [navigate, userData, userId]);

  const fetchOrders = async (userId) => {
    try {
      const response = await fetch(`https://grocery-shop-1.onrender.com:10000/order/${userId}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const cancelOrder = async (orderId) => {
    const cancelOrder = window.confirm("Do you want to continue with your cancellation?");
    if (cancelOrder) {
      try {
        const response = await fetch(`https://grocery-shop-1.onrender.com:10000/order/cancel`, {
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
          setOpenSnackbar(true);
          setAlertMessage("Order cancelled!");
          fetchOrders(userId); // Reload orders after successful cancellation
        } else {
          console.error('Failed to cancel order');
          setOpenAlert(true);
          setAlertMessage("Error cancelling order");
        }
      } catch (error) {
        console.error("Error cancelling order:", error);
        setOpenAlert(true);
        setAlertMessage("Error cancelling order");
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    navigate('/myOrders'); // Navigate to the desired page when the alert closes
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div>
      
      {orders.length === 0 ? (
        <Box style={{ padding: '20px', marginBottom: '25%', marginTop: '10%', textAlign: 'center'}}>
          <Typography variant="h3">
            No Orders available!
          </Typography>
        </Box>
      ) : (
        <>
          <h1>My Orders</h1>
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
        </>
      )}
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity="error"
          sx={{ marginRight: "10px", marginTop: "60px" }}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
