import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductList = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const category_id = location.state?.category_id;
    
    
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/products/fetchByCategory?category_id=${category_id}`);
          setProducts(response.data);
        } catch (err) {
          setError('Error fetching products');
        } finally {
          setLoading(false);
        }
      };
      
      fetchProducts();
    }, [categoryId]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    
    const cardStyle = {
      maxWidth: 345,
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
      boxShadow: '0 4px 8px 0 rgba(2, 15, 45 )',
      borderRadius: '8px',
      margin: '16px',
      background: 'linear-gradient(135deg, #ACF75C 30%, #05BB47 90%)' // Updated gradient color to yellowish
    };
    
    const mediaStyle = {
        height: 250,
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        objectFit: 'contain',
      };


  const buttonStyle = {
    color: 'black', // Text color
    fontWeight: 'bold', // Font weight
    border: '2px solid black', // Border
    borderRadius: '20px', // Border radius
    padding: '8px 16px', // Padding
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', // Transition
    '&:hover': {
      backgroundColor: 'rgba(212, 230, 241)', // Updated hover background color with radiant effect
      color: 'black', // Hover text color
      borderColor: 'black', // Hover border color
    },
  };

  
  const handleProduct = (result) => {
    navigate('/product', { state: { productName: result } });
    // handleRefresh();
  };

  
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx= {cardStyle}>
              <Box sx={{objectFit: 'contain', bgcolor: 'white'}}>
                <CardMedia 
                component="img"
                alt={product.name}
                sx={mediaStyle}
                image={product.image}
              />
              </Box>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="subtitle1">Price: Rs. {product.price}</Typography>
                <Button size='small' sx={buttonStyle} onClick={()=>handleProduct(product.name)}>
                  Show Item
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
