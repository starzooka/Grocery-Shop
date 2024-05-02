import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreeTerms: false,
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const password = data.get("password");
    const phoneNumber = data.get("phoneNumber");
    const agreeTerms = data.get("agreeTerms");

    if (!firstName || !lastName) {
      setAlertMessage("Please enter both your first name and last name.");
      setOpenAlert(true);
      return;
    }

    if (!isValidEmail(email)) {
      setAlertMessage("Please enter a valid email address.");
      setOpenAlert(true);
      return;
    }

    if (!isValidPassword(password)) {
      setAlertMessage("Password must be at least 8 characters long.");
      setOpenAlert(true);
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setAlertMessage("Please enter a valid 10-digit phone number.");
      setOpenAlert(true);
      return;
    }

    if (!agreeTerms) {
      setAlertMessage("Please agree to the terms and conditions.");
      setOpenAlert(true);
      return;
    }
    try {
      // Make HTTP POST request to your backend server
      const response = await axios.post("http://localhost:5000", formData);

      // Handle successful response
      console.log(response.data); // Log response from the server

      // Show success alert
      setSuccessAlert(true);
    } catch (error) {
      // Handle error
      console.error("Error:", error);

      // Show error alert
      setAlertMessage("An error occurred while signing up. Please try again later.");
      setOpenAlert(true);
    }
    // Proceed with sign-up process
    console.log({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    setSuccessAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs" sx={{  marginTop:8, 
        paddingBottom: '3rem', border:1.8, 
        borderColor:'primary.main', borderRadius:'30px', boxShadow:'1px 1px 5px #1976D2'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="agreeTerms" color="primary" />}
                  label="I agree to your terms and conditions."
                />
              </Grid>
            </Grid>
            <Link href='/'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar
  open={openAlert}
  autoHideDuration={6000}
  onClose={handleCloseAlert}
  anchorOrigin={{ vertical: "top", horizontal: "right" }} // Adjusted the vertical position to "bottom"
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={handleCloseAlert}
    severity="error"
    sx={{
      marginRight: '10px',
      marginTop: '60px'
    }
    }
  >
    {alertMessage}
  </MuiAlert>
</Snackbar>
      {/* Success alert */}
      <Snackbar
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity="success"
        >
          Form submitted successfully!
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
