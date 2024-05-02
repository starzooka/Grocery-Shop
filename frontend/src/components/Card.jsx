import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = (props) => {
  const { img, itemName, itemDescription, price } = props;

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
  };

  const actionsStyle = {
    justifyContent: 'space-between',
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

  const titleStyle = {
    fontFamily: 'Arial, sans-serif', // Font family
    fontSize: '1.2rem', // Font size
    fontWeight: 'bold', // Font weight
    color: '#000000', // Text color
  };

  const descriptionStyle = {
    fontFamily: 'Arial, sans-serif', // Font family
    fontSize: '1rem', // Font size
    color: '#333', // Text color
  };

  const priceStyle = {
    fontFamily: 'Arial, sans-serif', // Font family
    fontSize: '1.1rem', // Font size
    fontWeight: 'bold', // Font weight
    color: '#000000', // Text color
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={mediaStyle}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
          {itemName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={descriptionStyle}>
          {itemDescription}
        </Typography>
        {/* <Typography variant="body2" color="text.primary" sx={priceStyle}>
          Price: ${price}
        </Typography> */}
      </CardContent>
      <CardActions sx={actionsStyle}>
        <Button size="small" sx={buttonStyle}>Show More</Button>
        {/* <Button size="small" sx={buttonStyle}>Add to cart</Button> */}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
