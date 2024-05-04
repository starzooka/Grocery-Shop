import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '../components/Card';
import ImageSlider from '../components/ImageSlider';
import'./Home.css';
export default function HomePage() {
  const BestSellers = [
    {
      itemName: 'Tata Masoor Dal',
      itemDescription: 'Rice,Atta, Dal ',
      img: 'https://m.media-amazon.com/images/I/615f7J9S1KL.jpg', 
    },
    {
      itemName: 'Tide Plus',
      itemDescription: 'Cleaning Essentials',
      img: 'https://assets.wakefern.com/is/image/wakefern/3077209164-060?$Mi9Product_detail$',
    },
    {
      itemName: 'Amul Butter',
      itemDescription: 'Dairy',
      img: 'https://production-uploads-cdn.anar.biz/uploads/image/image/6522684/medium_05849679-4b99-44cb-9ba1-e2c69c9a17f6_1641809095485_photo.png', 
    },
    {
      itemName: 'Lux',
      itemDescription: 'Soaps',
      img: 'https://m.media-amazon.com/images/I/61ler88ORoL.jpg', 
    },
    {
      itemName: 'Sunrise Masala Pack',
      itemDescription: 'Sugar,Salt,Spices',
      img: 'https://spicevariety.com/cdn/shop/files/Machher_Jhol_Masala.jpg?v=1693967272', 
    },
    {
      itemName: 'Maggi',
      itemDescription: 'Snacks',
      img: 'https://www.bigbasket.com/media/uploads/groot/images/232022-38eb2bd5-second-module.jpg', 
    },
    {
      itemName: 'India Gate',
      itemDescription: 'Rice, Atta,Dal',
      img: 'https://www.arabianbusiness.com/cloud/2021/09/14/ktJ4IL2d-India-Gate-Rice.jpg', 
    },
    {
      itemName: 'Aashirvaad',
      itemDescription: 'Rice, Atta, Dal',
      img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/flour/g/l/0/10-m-p-chakki-atta-made-from-100-m-p-wheat-0-maida-1-all-purpose-original-imagpprmeznspnev.jpeg?q=20', 
    }]

    const Recommended = [{
      itemName: 'Vadilal ButterScotch',
      itemDescription: 'Icecream',
      img: 'https://b.zmtcdn.com/data/dish_photos/ee4/eecb8e9846b27808a68fcd073bc01ee4.jpg', 
    },
    
    {
      itemName: 'Fortune',
      itemDescription: 'Edible Oil',
      img: 'https://m.media-amazon.com/images/I/810bFfXtiZS._AC_UF350,350_QL80_.jpg', 
    },
    {
      itemName: 'Tata Gold Tea ',
      itemDescription: 'Tea, Coffee, Energy Drinks',
      img: 'https://icarus.co.in/uploads/work/TATA-TEA-GOLD-PAGE-22.jpg', 
    },
    {
      itemName: 'Nescafe',
      itemDescription: 'Tea,Coffee, Energy Drinks',
      img: 'https://img-new.cgtrader.com/items/2032406/9a17660223/large/nescafe-3d-model-obj-mtl-fbx-ma-mb.jpg', 
    },
    {
      itemName: 'Cadbury Dairy Milk',
      itemDescription: 'Snacks',
      img: 'https://wallpapercave.com/wp/wp6274652.jpg', 
    },
    {
      itemName: 'Sprite',
      itemDescription: 'Bevarages',
      img: 'https://media.licdn.com/dms/image/D4D12AQH672I_X8LGKg/article-cover_image-shrink_720_1280/0/1706716378118?e=2147483647&v=beta&t=Oxg6CYXC2ZVvJxftTQK-IQ0TFbmlLCiWDoOqabQULDI', 
    },
    {
      itemName: 'Lays',
      itemDescription: 'Snacks',
      img: 'https://t3.ftcdn.net/jpg/05/33/12/54/360_F_533125486_eALaWhiw53CLqnM4same9ZO3r9ZJGBpj.jpg', 
    },
    {
      itemName: 'Tata Salt',
      itemDescription: 'Sugar,Salt, Spices',
      img: 'https://e0.pxfuel.com/wallpapers/127/820/desktop-wallpaper-effie-tata-logo.jpg', 
    }]

    const Browse = [{
      itemName: 'Tata Zero Sugar',
      itemDescription: 'Sugar,Salt, Spices',
      img: 'https://i.ytimg.com/vi/CrZAyR7NtT4/maxresdefault.jpg', 
    },
    {
      itemName: 'Denver',
      itemDescription: 'Body Essentials',
      img: 'https://m.media-amazon.com/images/I/61ULoP9ULOL._AC_UF350,350_QL80_.jpg', 
    },
    {
      itemName: 'Fogg',
      itemDescription: 'Body Essentials',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/99a7ec162450965.63d63d9e921a7.jpg', 
    },
    {
      itemName: 'Carolina Herrera',
      itemDescription: 'Body Essentials',
      img: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/8411061824320_6.jpg?scale=500&qlty=75', 
    },
    {
      itemName: 'Los Perfumes',
      itemDescription: 'Body Essentials',
      img: 'https://img.freepik.com/fotos-premium/perfume-explosion-aroma-floral-ai-generativa_74760-7293.jpg', 
    },
    {
      itemName: 'Mangaldeep',
      itemDescription: 'Agarbati & Candles',
      img: 'https://mir-s3-cdn-cf.behance.net/projects/404/05b09b196404703.Y3JvcCw5MDEsNzA0LDAsMzQx.png', 
    },
    {
      itemName: 'Tata Moong Dal',
      itemDescription: 'Rice,Atta,Dal ',
      img: 'https://www.jiomart.com/images/product/original/490830940/tata-sampann-unpolished-moong-dal-1-kg-product-images-o490830940-p490830940-0-202207201859.jpg?im=Resize=(1000,1000)', 
    },
    {
      itemName: 'Lizol',
      itemDescription: 'Cleaning Essentials',
      img: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/products/1_f64f14eb-10bd-4b75-bddd-cc904dbd4eb5_540x.jpg?v=1626087169', 
    },
    {
      itemName: 'Boost',
      itemDescription: 'Tea, Coffee, Energy Drinks',
      img: 'https://w0.peakpx.com/wallpaper/867/682/HD-wallpaper-boost-bottle-coca-cola-cold-stone.jpg', 
    },
    {
      itemName: 'Loreal',
      itemDescription: 'Hair essentials',
      img: 'https://t3.ftcdn.net/jpg/02/79/48/64/240_F_279486473_LHhju4MMPScC4PjepVVoItp0OV2o1vIC.jpg', 
    },
    {
      itemName: 'Pedigree',
      itemDescription: 'Pet Food',
      img: 'https://m.media-amazon.com/images/I/610EIbtC1ML.jpg', 
    },
    {
      itemName: 'SetWet Styling Gel',
      itemDescription: 'Hair essentials',
      img: 'https://m.media-amazon.com/images/I/61efFnT7A5L._AC_UF1000,1000_QL80_.jpg', 
    },
    {
      itemName: 'Pediasure',
      itemDescription: 'Baby Product',
      img: 'https://rukminim2.flixcart.com/image/750/900/l0fm07k0/milk-drink-mix/k/l/h/-original-imagc7vzzkz2jpc7.jpeg?q=20', 
    },
    {
      itemName: 'Johnson Baby Shampoo',
      itemDescription: 'Baby Product',
      img: 'https://m.media-amazon.com/images/I/51h9GX5t-NL.jpg', 
    },
  ];

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
    <Grid container spacing={3} sx={{paddingTop: 1, paddingX: 1}}>
      {Browse.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            itemName={item.itemName}
            itemDescription={item.itemDescription}
            img={item.img}
          />
        </Grid>
      ))}
    </Grid>

    </>
  );
}