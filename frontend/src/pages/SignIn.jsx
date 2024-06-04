import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const theme = createTheme();

export default function SignIn() {
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [successAlert, setSuccessAlert] = React.useState(false);
  const navigate = useNavigate(); // Use navigate to redirect the user
  const handleRefresh=()=>{
    window.location.reload();
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

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

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Sign in failed");
      }

      const { message, user } = responseData;

      if (message === "Sign in successful") {
        setSuccessAlert(true);
        setAlertMessage("Signed in successfully!");
        
        // Storing user data in sessionStorage
        const userData = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          address: user.address
        };
        sessionStorage.setItem("userData", JSON.stringify(userData));
        console.log(JSON.stringify(userData))
        // Redirect to home after a short delay
        navigate('/'); 
        handleRefresh();
      } else {
        throw new Error("Sign in failed");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setAlertMessage("Credentials are invalid.");
      setOpenAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setSuccessAlert(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginTop: "62px",
          marginBottom: "60px",
          paddingBottom: "3rem",
          border: 1.8,
          backgroundColor: "#ffffff50",
          borderColor: "primary.main",
          borderRadius: "30px",
          boxShadow: "1px 1px 5px #1976D2",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 11,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signUp" variant="body2">
                  Don't have an account? Sign up
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
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity="error"
          sx={{ marginRight: "10px", marginTop: "60px" }}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
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
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
