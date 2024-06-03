import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
function ShowProduct() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0); // State to store the quantity of the product in the cart
    const location = useLocation();
    const navigate = useNavigate();
    const productName = location.state?.productName;

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:5000/products/fetchByName?name=${productName}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        async function fetchCartQuantity() {
            try {
                const userData = JSON.parse(sessionStorage.getItem('userData'));
                const userId = userData.id;
                const response = await fetch(`http://localhost:5000/cart/${userId}/${product.id}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const cartData = await response.json();
        
                // Check if cartData.quantity exists
                if (cartData && 'quantity' in cartData) {
                    setCartQuantity(cartData.quantity);
                    // setQuantity(cartData.quantity);
                    setAddedToCart(true);
                    console.log(cartData.quantity);
                }
            } catch (error) {
                console.error('Error fetching cart quantity:', error);
            }
        }
        
        
        if (productName) {
            fetchProduct();
            fetchCartQuantity();
        }
    }, [productName, product]);

    const handleAddToCart = () => {
        setAddedToCart(true);
        // Implement the functionality for "Add to Cart" button
        console.log(`Added ${quantity} of ${product.name} to cart.`);
        
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            if (newQuantity < 1) {
                setAddedToCart(false);
                return 1;  // Ensure the quantity does not go below 1
            }
            return newQuantity;
        });
    };

    const handleAddItems = async () => {
        try {
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            const userId = userData.id;
            const itemTotal = quantity * product.price;
            console.log(itemTotal);
            const response = await fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: product.id,
                    user_id: userId, // Using userId variable here
                    product_quantity: quantity,
                    item_total: itemTotal, // Adding item_total here
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add items to cart');
            }
    
            console.log('Items added to cart successfully');
            navigate('/myCart');
        } catch (error) {
            console.error('Error adding items to cart:', error);
        }
    };
    

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '500px'
                }}
            >
                <Box
                    sx={{
                        width: '700px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        background: 'linear-gradient(135deg, #E2EADF 30%, #ABDADA 90%)',
                        padding: '20px',
                        marginLeft: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '75px'
                    }}
                >
                    {product && (
                        <>
                            <h1>{product.name}</h1>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Box className="product-details" sx={{ flex: 1, marginRight: '20px' }}>
                                    <h2>Product Details</h2>
                                    <p><strong>Name:</strong> {product.name}</p>
                                    <p><strong>Price:</strong> Rs. {product.price}</p>
                                    <p><strong>Description:</strong> {product.description}</p>
                                </Box>
                                <Box sx={{ flexShrink: 0 }}>
                                    {product.image && <img src={product.image} alt="Product" className="product-image" height='auto' width='200' />}
                                </Box>
                            </Box>
                            {!addedToCart ? (
                                <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                                    <Button variant="contained" color="secondary" onClick={handleAddToCart}>Add to Cart</Button>
                                </Box>
                            ) : (
                                <>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                                        <IconButton onClick={handleDecrement}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Box>{quantity}</Box>
                                        <IconButton onClick={handleIncrement}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                                        <Button variant="contained" color="primary" onClick={handleAddItems}>Add to Cart</Button>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                                        <p>Quantity in Cart: {cartQuantity}</p>
                                    </Box>
                                </>
                            )}
                        </>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default ShowProduct;
