import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '../components/productCard';
import ImageSlider from '../components/ImageSlider';
import'./Home.css';
import Categories from './Categories';
export default function HomePage() {
  const BestSellers = [
    {
      itemName: 'Lux Soap',
      img: 'https://m.media-amazon.com/images/I/61ler88ORoL.jpg', 
    },
    {
      itemName: 'Tide Plus',
      img: 'https://m.media-amazon.com/images/I/71zvWx6iBkL.jpg',
    },
    {
      itemName: 'Nivea Cream',
      img: 'https://m.media-amazon.com/images/I/51L6XyyB6OL._SL1000_.jpg', 
    },
    {
      itemName: 'Amul Milk',
      img: 'https://m.media-amazon.com/images/I/81jBZSGusFL._SL1500_.jpg', 
    },
    {
      itemName: 'Oreo Cookies',
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjmsPucgr5Yn-xyYaR81qowOpsbTl75nhiOLKR1K-907yGtptNiwCso4oRWaclffAScrcuq5sHaSQp-0mNbtrqOBXlKJJjbSZntzuZ3KTsFSFBsTCIsVR_Ag', 
    },
    {
      itemName: 'Sunflower Oil',
      itemDescription: 'Snacks',
      img: 'https://m.media-amazon.com/images/I/51lhiuiD8vL._SL1080_.jpg', 
    },
    {
      itemName: 'Chicken Eggs',
      itemDescription: 'Rice, Atta,Dal',
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3vBAXN432TiMUgsSWTNblNMKAAY90wcFgSDJiBVszII6oFz1gR01sgqsCn-uzZNEsqmay9Y-rR2aaui1hEnJdx-ohIP_ZQ4IgCBVvYw8', 
    },
    {
      itemName: 'Pepsi(1.25 L)',
      itemDescription: 'Rice, Atta, Dal',
      img: 'https://m.media-amazon.com/images/I/51pGxfs4w1L.jpg', 
    }]

    const Recommended = [{
      itemName: 'Thums Up(1.25 L)',
      img: 'https://www.bigbasket.com/media/uploads/p/l/251014_12-thums-up-soft-drink.jpg', 
    },
    
    {
      itemName: 'Mustard Oil',
      img: 'https://m.media-amazon.com/images/I/51qNQuEdSAL._SL1000_.jpg', 
    },
    {
      itemName: 'Vivel Soap',
      img: 'https://m.media-amazon.com/images/I/61kanQPiG7L._SL1200_.jpg', 
    },
    {
      itemName: 'Loreal Shampoo',
      img: 'https://m.media-amazon.com/images/I/51XRBhiGO1L._SL1500_.jpg', 
    }]

  
  return (
  <>
    <ImageSlider/>
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', backgroundColor: '#ffffff40', padding: '10px', marginLeft: 3, borderRadius: '50px 0px 0px 50px'  }}>Best Sellers</Typography>
    <Grid container spacing={3} sx={{paddingTop: 1, paddingX: 1}}>
      {BestSellers.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            itemName={item.itemName}
            itemDescription={item.itemDescription}
            img={item.img}
          />
        </Grid>
      ))}
    </Grid>
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', backgroundColor: '#ffffff40', padding: '10px', marginLeft: 3, borderRadius: '50px 0px 0px 50px'  }}>Recommended</Typography>
    <Grid container spacing={3} sx={{paddingTop: 1, paddingX: 1}}>
      {Recommended.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            itemName={item.itemName}
            itemDescription={item.itemDescription}
            img={item.img}
          />
        </Grid>
      ))}
    </Grid>
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '10px', backgroundColor: '#ffffff40', padding: '10px', marginLeft: 3, borderRadius: '50px 0px 0px 50px'  }}>Browse More</Typography>
      <Categories/>
    </>
  );
}