import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: '#78C867',
          color: 'white',
          '&:hover': {
            background: '#04761D',
          },
        },
      },
    },
  },
});

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
      setIsAuthenticated(true);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
      setAddress(userData.address);
    } else {
      navigate('/signIn');
    }
  }, [navigate]);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleReset = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = () => {
    // Save profile changes
    setIsEditing(false);
  };

  const handleProfilePictureChange = (event) => {
    // Handle profile picture change
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            width: '300px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #E2EADF 30%, #ABDADA 90%)',
            padding: '20px',
          }}
        >
          <Avatar sx={{ width: 100, height: 100, background: '#487CB6' }} src={profilePicture}>
            {/* Display first letter of email if no profile picture */}
            {profilePicture ? null : email.charAt(0).toUpperCase()}
          </Avatar>
          {isEditing ? (
            <Box sx={{ marginTop: '20px' }}>
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="lastname"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button onClick={handleReset} variant="contained">
                  Reset
                </Button>
                <Button onClick={handleSaveProfile} variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{ marginTop: '20px' }}>
              <Typography variant="h6" align="center">
                <b>{firstName} {lastName}</b>
              </Typography>
              <Typography variant="body1" align="center">{email}</Typography>
              <Typography variant="body1" align="center">{address}</Typography>
              <Typography variant="body1" align="center">{phoneNumber}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button onClick={handleEditProfile} variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
