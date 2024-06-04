import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from './searchbar';
import LogoImage from './NAVBARlogO.png';
import SearchResultsList from './SearchResultsList.jsx';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    setIsAuthenticated(!!userData);
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/");
    window.location.reload();
    handleButtonClick(null);
  };

  return (
    <div>
      <ThemeProvider theme={themeNav}>
        <AppBar position="static" sx={{ background: themeNav.gradient.main }}>
          <Toolbar>
            <img src={LogoImage} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <b><i>GREEN MART</i></b>
            </Typography>
            <div className="search-bar-container" style={{ position: 'relative', marginRight: '100px' }}>
              <Searchbar setResults={setResults} />
              {results && results.length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%' }}>
                  <SearchResultsList results={results} />
                </div>
              )}
            </div>
            <Box>
              <Link to="/">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'home' ? '#01682A' : 'transparent',
                    color: '#FFFFFF',
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
                    color: '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('categories')}
                >
                  <CategoryIcon />
                  Categories
                </Button>
              </Link>
              
              {isAuthenticated ? (<>
<Link to="/myCart">
                <Button
                  color="secondary"
                  sx={{
                    backgroundColor: selectedButton === 'cart' ? '#01682A' : 'transparent',
                    color: '#FFFFFF',
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
                    color: '#FFFFFF',
                  }}
                  onClick={() => handleButtonClick('account')}
                >
                  <AccountCircleIcon />
                  My Account
                </Button>
              </Link>
                <Button
                  color="secondary"
                  onClick={handleSignOut}
                  sx={{
                    backgroundColor: selectedButton === 'signOut' ? '#01682A' : 'transparent',
                    color: '#FFFFFF',
                  }}
                >
                  SIGN OUT
                </Button>
                  </>
              ) : (
                <Link to="/signIn">
                  <Button
                    color="secondary"
                    sx={{
                      backgroundColor: selectedButton === 'signIn' ? '#01682A' : 'transparent',
                      color: '#FFFFFF',
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
