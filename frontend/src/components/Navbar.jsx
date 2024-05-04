import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu, MenuItem, MenuList } from '@mui/material';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from './searchbar';

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
      contrastText: '#000000', // Text color is dark
    },
  },
  gradient: {
    main:  'linear-gradient(135deg,#CAF00A   30%, #05BB47 90%)', // Adjust gradient colors
  },
});

export default function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <ThemeProvider theme={themeNav}>
        <AppBar position="static" sx={{ background: themeNav.gradient.main }}>
          {/* Apply gradient background */}
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              edge="start"
              aria-label="logo"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <StoreSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              GREEN MART
            </Typography>
            <Searchbar />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <Button
                  color="secondary"
                  sx={{
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedButton === 'home' ? '#01682A ' : 'transparent',
                    color: selectedButton === 'home' ? '#FFFFFF' : '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      transform: 'scale(1.05)',
                    },
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
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedButton === 'categories' ? '#01682A' : 'transparent',
                    color: selectedButton === 'categories' ? '#FFFFFF' : '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      transform: 'scale(1.05)',
                    },
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
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedButton === 'cart' ? '#01682A' : 'transparent',
                    color: selectedButton === 'cart' ? '#FFFFFF' : '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      transform: 'scale(1.05)',
                    },
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
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedButton === 'account' ? '#01682A' : 'transparent',
                    color: selectedButton === 'account' ? '#FFFFFF' : '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={() => handleButtonClick('account')}
                >
                  <AccountCircleIcon />
                  My Account
                </Button>
              </Link>
              <Link to="/signIn">
                <Button
                  color="secondary"
                  sx={{
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedButton === 'signIn' ? '#01682A' : 'transparent',
                    color: selectedButton === 'signIn' ? '#FFFFFF' : '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={() => handleButtonClick('signIn')}
                >
                  SIGN IN
                </Button>
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
                <MenuIcon />
              </IconButton>
              <Menu open={Boolean(anchorNav)} onClose={closeMenu} anchorEl={anchorNav} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MenuList>
                  <Link to="/home">
                    <MenuItem>
                      <HomeIcon />
                      HOME
                    </MenuItem>
                  </Link>
                  <Link to="/categories">
                    <MenuItem>
                      <CategoryIcon />
                      Categories
                    </MenuItem>
                  </Link>
                  <Link to="/mycart">
                    <MenuItem>
                      <ShoppingCartIcon />
                      My cart
                    </MenuItem>
                  </Link>
                  <Link to="/about">
                    <MenuItem>
                      <AccountCircleIcon />
                      My Account
                    </MenuItem>
                  </Link>
                  <Link to="/signIn">
                    <MenuItem>SIGN IN</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
            <IconButton
              size="large"
              color="inherit"
              edge="start"
              aria-label="logo"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <StoreSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              Inventory Master
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
