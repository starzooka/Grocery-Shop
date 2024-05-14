import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from './searchbar';
import { useAuth } from '../AuthContext'; // Update import path as needed

const themeNav = createTheme({
  palette: {
    primary: {
      light: '#1976D2',
      main: '#1976D2',
      dark: '#1976D2',
      contrastText: '#00000',
    },
    secondary: {
      light: '#4CAF50',
      main: '#fefefe',
      dark: '#4CAF50',
      contrastText: '#000000',
    },
  },
  gradient: {
    main: 'linear-gradient(135deg,#CAF00A 30%, #05BB47 90%)',
  },
});

export default function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);
  const { isAuthenticated, signOut } = useAuth();


  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleSignOut = () => {
    signOut();
    handleButtonClick(null);
  };

  return (
    <div>
      <ThemeProvider theme={themeNav}>
        <AppBar position="static" sx={{ background: themeNav.gradient.main }}>
          <Toolbar>
            <IconButton size="large" color="inherit" edge="start" aria-label="logo">
              <StoreSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GREEN MART
            </Typography>
            <Searchbar />
            <Box>
              <Link to="/">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'home' ? '#01682A ' : 'transparent',
                    color: selectedButton === 'home' ? '#FFFFFF' : '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('home')}
                >
                  <HomeIcon />
                  HOME
                </Button>
              </Link>
              <Link to="/categories">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'categories' ? '#01682A' : 'transparent',
                    color: selectedButton === 'categories' ? '#FFFFFF' : '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('categories')}
                >
                  <CategoryIcon />
                  Categories
                </Button>
              </Link>
              <Link to="/myCart">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'cart' ? '#01682A' : 'transparent',
                    color: selectedButton === 'cart' ? '#FFFFFF' : '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('cart')}
                >
                  <ShoppingCartIcon />
                  My cart
                </Button>
              </Link>
              <Link to="/myAccount">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'account' ? '#01682A' : 'transparent',
                    color: selectedButton === 'account' ? '#FFFFFF' : '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('account')}
                >
                  <AccountCircleIcon />
                  My Account
                </Button>
              </Link>
              {isAuthenticated && (
                <Button
                  color="secondary"
                  onClick={handleSignOut}
                  sx={{
                    backgroundColor: selectedButton === 'signOut' ? '#01682A' : 'transparent',
                    color: selectedButton === 'signOut' ? '#FFFFFF' : '#FFFFFF',
                  }}
                >
                  SIGN OUT
                </Button>
              )}
              {!isAuthenticated && (
                <Link to="/signIn">
                  <Button
                    color="secondary"
                    sx={{
                      backgroundColor: selectedButton === 'signIn' ? '#01682A' : 'transparent',
                      color: selectedButton === 'signIn' ? '#FFFFFF' : '#FFFFFF',
                    }}
                    onClick={() => handleButtonClick('signIn')}
                  >
                    SIGN IN
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
