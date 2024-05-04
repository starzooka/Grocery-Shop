import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '../components/Card';
export default function Categories() {
  // Sample data for demonstration
  const items = [
    {
      itemName: 'Soaps',
      img: 'https://img.freepik.com/free-photo/sponge-various-soaps_23-2148796388.jpg?size=626&ext=jpg&ga=GA1.1.1572608831.1700747713&semt=ais', // Sample image URL
    },
    {
      itemName: 'Hair Essentials',
      img: 'https://img.freepik.com/free-photo/free-photo-beauty-product-bottle-mockup-image-with-background_1340-31229.jpg?t=st=1714049905~exp=1714053505~hmac=5cae06925c6bbeba6b080c429119749c9e2d0381511e6e536a500ac32f5ef887&w=900', // Sample image URL
    },
    {
      itemName: 'Skin Care',
      img: 'https://img.freepik.com/premium-photo/beauty-care-product-bottle-make-up_245570-1557.jpg?w=900', // Sample image URL
    },
    {
      itemName: 'Snacks',
      img: 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600', // Sample image URL
    },
    {
      itemName: 'Dairy, Eggs',
      img: 'https://cdn.ecommercedns.uk/files/8/226758/1/5396401/dairy-eggs.png', // Sample image URL
    },
    {
      itemName: 'Bread',
      img: 'https://img.freepik.com/premium-photo/still-life-varied-assortment-breads-black-wall_165656-826.jpg?size=626&ext=jpg&ga=GA1.1.1572608831.1700747713&semt=sph', // Sample image URL
    },
    {
      itemName: 'Edible Oils',
      img: 'https://img.freepik.com/premium-photo/olive-oil-glass-bottles-olives_772702-6870.jpg?w=360', // Sample image URL
    },
    {
      itemName: 'Bevarages',
      img: 'https://img.freepik.com/premium-photo/ice-cream-shake-with-cookie-served-glass-isolated-table-side-view-healthy-drink_689047-6790.jpg?w=900', // Sample image URL
    },
    {
      itemName: 'Ice Cream',
      img: 'https://img.freepik.com/premium-photo/strawberry-ice-cream-bowl-front-picture-cozy-scene_802212-19.jpg?w=900', // Sample image URL
    },
    {
      itemName: 'Baby Product',
      img: 'https://img.freepik.com/premium-photo/close-up-pink-flowers-table_1048944-3412131.jpg?w=900', // Sample image URL
    },
    {
      itemName: 'Atta, Rice, Dal',
      img: 'https://img.freepik.com/free-photo/spices-market-morocco_23-2148129884.jpg?t=st=1714052043~exp=1714055643~hmac=20fc1c6395bd8c2fb496467ddcb10143c2ec14566a459c7b1fc89d3b459c578f&w=900', // Sample image URL
    },
    {
      itemName: 'Vegetables, Fruits',
      img: 'https://img.freepik.com/free-photo/various-vegetables-fruits-laid-out-circle-dark-background_169016-23758.jpg?t=st=1714052166~exp=1714055766~hmac=77eae0502eccc0031c1e77cab41a16e1703a8126065a1ddf5307f3c9bfe5d9d0&w=740', // Sample image URL
    },
    {
      itemName: 'Drinks',
      img: 'https://img.freepik.com/free-photo/futuristic-brightly-colored-soda-can_23-2150995299.jpg?t=st=1714289006~exp=1714292606~hmac=830bae6c230044b67e44da3fb55f7f11b16889b8f1a855f732b2fb417f87888a&w=996', // Sample image URL
    },
    {
      itemName: 'Body Essentials',
      img: 'https://img.freepik.com/free-photo/mock-up-packaging-cosmetic-amenities_105762-2341.jpg?t=st=1714289495~exp=1714293095~hmac=b76b2a7877d8ccfc24f1a609a8e66c3bf0aa739341d0f66015fa27add7823c6e&w=900', // Sample image URL
    },
    {
      itemName: 'Pet Food',
      img: 'https://img.freepik.com/premium-photo/sleek-automatic-dog-feeder-dispensing-kibble-closeup_1188475-3082.jpg?w=1060', // Sample image URL
    },
    {
      itemName: 'Agarbati & Candle ',
      img: 'https://tfipost.com/wp-content/uploads/2023/08/Agarbatti-and-Dhoop-750x375.jpg', // Sample image URL
    },
    {
      itemName: 'Clean Home ',
      img: 'https://img.freepik.com/free-photo/clean-kitchen-requires-proper-hygiene-dishwashing-equipment-generated-by-ai_24640-99801.jpg?t=st=1714290873~exp=1714294473~hmac=1c6385de14ea98927913ee836509c312c0a1c2a40a88fe80027cd9319faf98c2&w=1060', // Sample image URL
    },
    {
      itemName: 'Vegetables, Fruits',
      img: 'https://img.freepik.com/free-photo/freshness-nature-bounty-healthy-eating-vegetarian-food-variation-generated-by-artificial-intelligence_25030-60719.jpg?t=st=1714570089~exp=1714573689~hmac=564633bd537b82d40e54357bc0ef379bdf0d39d61cc1c5874d6615ae4f132326&w=1060', // Sample image URL
    },
  ];

  return (
    <Grid container spacing={3} sx={{paddingTop: 1, paddingX: 1}}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            itemName={item.itemName}
            itemDescription={item.itemDescription}
            img={item.img}
          />
        </Grid>
      ))}
    </Grid>
  );
}
