import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '../components/Card';
export default function Categories() {
  // Sample data for demonstration
  const items = [
    {
      id: 1,
      itemName: 'Soaps',
      img: 'https://img.freepik.com/free-photo/sponge-various-soaps_23-2148796388.jpg?size=626&ext=jpg&ga=GA1.1.1572608831.1700747713&semt=ais', // Sample image URL
    },
    {
      id: 2,
      itemName: 'Hair Essentials',
      img: 'https://img.freepik.com/free-photo/free-photo-beauty-product-bottle-mockup-image-with-background_1340-31229.jpg?t=st=1714049905~exp=1714053505~hmac=5cae06925c6bbeba6b080c429119749c9e2d0381511e6e536a500ac32f5ef887&w=900', // Sample image URL
    },
    {
      id: 3,
      itemName: 'Skin Care',
      img: 'https://img.freepik.com/premium-photo/beauty-care-product-bottle-make-up_245570-1557.jpg?w=900', // Sample image URL
    },
    {
      id: 4,
      itemName: 'Snacks',
      img: 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600', // Sample image URL
    },
    {
      id: 5,
      itemName: 'Edible Oils',
      img: 'https://img.freepik.com/premium-photo/olive-oil-glass-bottles-olives_772702-6870.jpg?w=360', // Sample image URL
    },
    {
      id: 6,
      itemName: 'Dairy, Eggs',
      img: 'https://cdn.ecommercedns.uk/files/8/226758/1/5396401/dairy-eggs.png', // Sample image URL
    },
    {
      id: 7,
      itemName: 'Pet Food',
      img: 'https://img.freepik.com/premium-photo/sleek-automatic-dog-feeder-dispensing-kibble-closeup_1188475-3082.jpg?w=1060', // Sample image URL
    },
    {
      id: 8,
      itemName: 'Bevarages',
      img: 'https://img.freepik.com/premium-photo/ice-cream-shake-with-cookie-served-glass-isolated-table-side-view-healthy-drink_689047-6790.jpg?w=900', // Sample image URL
    },
    {
      id: 9,
      itemName: 'Baby Product',
      img: 'https://img.freepik.com/premium-photo/close-up-pink-flowers-table_1048944-3412131.jpg?w=900', // Sample image URL
    },
    {
      id: 10,
      itemName: 'Vegetables, Fruits',
      img: 'https://img.freepik.com/free-photo/various-vegetables-fruits-laid-out-circle-dark-background_169016-23758.jpg?t=st=1714052166~exp=1714055766~hmac=77eae0502eccc0031c1e77cab41a16e1703a8126065a1ddf5307f3c9bfe5d9d0&w=740', // Sample image URL
    },
    {
      id: 11,
      itemName: 'Clothing Essentials',
      img: 'https://img.freepik.com/free-photo/mock-up-packaging-cosmetic-amenities_105762-2341.jpg?t=st=1714289495~exp=1714293095~hmac=b76b2a7877d8ccfc24f1a609a8e66c3bf0aa739341d0f66015fa27add7823c6e&w=900', // Sample image URL
    },
    {
      id: 12,
      itemName: 'Incense & Candle ',
      img: 'https://tfipost.com/wp-content/uploads/2023/08/Agarbatti-and-Dhoop-750x375.jpg', // Sample image URL
    },
    {
      id: 13,
      itemName: 'Home Cleaners ',
      img: 'https://img.freepik.com/free-photo/clean-kitchen-requires-proper-hygiene-dishwashing-equipment-generated-by-ai_24640-99801.jpg?t=st=1714290873~exp=1714294473~hmac=1c6385de14ea98927913ee836509c312c0a1c2a40a88fe80027cd9319faf98c2&w=1060', // Sample image URL
    },
  ];

  return (
    <Grid container spacing={3} sx={{paddingTop: 1, paddingX: 1}}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            itemName={item.itemName}
            itemId={item.id}
            img={item.img}
          />
        </Grid>
      ))}
    </Grid>
  );
}
