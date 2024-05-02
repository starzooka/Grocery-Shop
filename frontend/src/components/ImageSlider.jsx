import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';

const images = [
  'https://img.freepik.com/premium-vector/super-sale-badge-sign-design_48159-307.jpg?w=1060',
  'https://www.pepsnacks.com/prod/s3fs-public/styles/pepsico_india_portfolio_hero_video_slider_fall_back_image_style/public/2022-07/Lays-offer.png?itok=nxlK8hFO',
  'https://sparklewithsurabhihome.files.wordpress.com/2017/05/surabhi_lal_lux_perfumed_soap_collection_banner.png',
  'https://edenthestore.in/uploads/products/16731.jpg',
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      style={{ maxWidth: 1000, margin: 'auto', marginTop: 20, position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.2s' }}
    >
      <CardMedia
        component="img"
        height="400"
        image={images[index]}
        alt={`Image ${index + 1}`}
        style={{ objectFit: 'cover', transition: 'opacity 1s ease-in-out' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)' }} />
      <Typography variant="body1" style={{ position: 'absolute', bottom: 10, left: 10, color: '#fff', transition: 'opacity 0.3s', opacity: 1 }}>
      </Typography>
    </Card>
  );
}
