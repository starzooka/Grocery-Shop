import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MyCart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openAlert, setOpenAlert] = useState(false); // Define openAlert state
  const [alertMessage, setAlertMessage] = useState(""); // Define alertMessage state
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        const userId = userData.id;
        const response = await fetch(`http://localhost:5000/cart/${userId}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const cartData = await response.json();
        setCartItems(cartData);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  async function handleDelete(itemId) {
    try {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      const userId = userData.id;
      const response = await fetch(
        `http://localhost:5000/cart/${userId}/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }

      // Update the state to remove the deleted item
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.item_total,
    0
  );
  const GtotalAmount = totalAmount.toFixed(2);

  const handleOrder = async () => {
    const confirmOrder = window.confirm(
      "Do you want to continue with your order?"
    );
    if (confirmOrder) {
      try {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        const userId = userData.id;

        const orderData = {
          user_id: userId,
          total_amount: GtotalAmount,
          items: cartItems.map((item) => ({
            product_id: item.id,
            product_quantity: item.product_quantity,
            item_total: item.item_total,
          })),
        };

        const response = await fetch("http://localhost:5000/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        if (!response.ok) {
          throw new Error("Failed to order items");
        }

        console.log("Items ordered successfully");
        const del_response = await fetch(`http://localhost:5000/cart/all`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId, // Using userId variable here
          }),
        });
        setOpenSnackbar(true);
        setAlertMessage("Order confirmed!");
        // navigate('/myOrders');
      } catch (error) {
        console.error("Error adding items to cart:", error);
        setOpenAlert(true); // Set openAlert to true to display the error Snackbar
        setAlertMessage("Error adding items to cart"); // Set the error message
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
    <Box
      sx={{
        width: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #E2EADF 30%, #ABDADA 90%)",
        padding: "20px",
        marginInline: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      {cartItems.length === 0 ? (
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#036C00",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "3rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            Cart is empty!
          </Typography>
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            gutterBottom
          >
            <ShoppingCartIcon fontSize="large" sx={{ marginRight: "0.5em" }} />{" "}
            My Cart
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="right">Price (Per Unit)</TableCell>
                  <TableCell align="right">Item Total</TableCell>
                  <TableCell align="center">Delete Item</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={item.image}
                          height="auto"
                          width="50px"
                          style={{ marginRight: "10px" }}
                          alt={item.name}
                        />
                        <span style={{ marginLeft: "20px" }}>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {item.product_quantity}
                    </TableCell>
                    <TableCell align="right">Rs. {item.price}</TableCell>
                    <TableCell align="right">Rs. {item.item_total}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteForeverIcon />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
            ml={5}
          >
            <Typography variant="h6" display="flex" alignItems="center">
              <span style={{ fontWeight: "bold" }}>
                Total amount payable (including taxes):{" "}
              </span>
              <span style={{ marginLeft: "10px" }}>Rs. {GtotalAmount}</span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginInline: "90px" }}
              onClick={handleOrder}
            >
              Place Order
            </Button>
          </Box>
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
              Order confirmed!
            </MuiAlert>
          </Snackbar>
        </>
      )}
    </Box>
  );
}

export default MyCart;
