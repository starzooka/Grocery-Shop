import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function MyCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const userData = JSON.parse(sessionStorage.getItem('userData'));
                const userId = userData.id;
                const response = await fetch(`http://localhost:5000/cart/${userId}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const cartData = await response.json();
                setCartItems(cartData);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }

        fetchCartItems();
    }, []);

    async function handleDelete(itemId) {
        try {
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            const userId = userData.id;
            const response = await fetch(`http://localhost:5000/cart/${userId}/${itemId}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete item from cart');
            }
            
            // Update the state to remove the deleted item
            setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    }

    const totalAmount = cartItems.reduce((total, item) => total + item.item_total, 0);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
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
                            <TableCell align="center">Delete Item</TableCell> {/* Adjust this column heading */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={item.image} height='auto' width='50px' style={{ marginRight: '10px' }} />
                                        <span style={{ marginLeft: '20px' }}>{item.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell align="center">{item.product_quantity}</TableCell>
                                <TableCell align="right">Rs. {item.price}</TableCell>
                                <TableCell align="right">Rs. {item.item_total}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
                                        <DeleteForeverIcon />Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} ml={5}>
                <Typography variant="h6" display="flex" alignItems="center">
                    <span style={{ fontWeight: 'bold' }}>Total amount payable (including taxes): </span>
                    <span style={{ marginLeft: '10px' }}>Rs. {totalAmount.toFixed(2)}</span>
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ marginInline: '90px' }}>
                    Buy Now
                </Button>
            </Box>
        </Box>
    );
}

export default MyCart;
