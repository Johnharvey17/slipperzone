import {
  Paper,
  TextField,
  Box,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

const style = {
  linkStyle: {
    cursor: "pointer",
    color: "#0818a6",
  },
  typography:{
    fontFamily:"Arial",
    fontSize:"30px"

  },
};

export default function Signin() {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
  };
  const messageInitialState = {
    text: "",
    severity: "error",
  };
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(messageInitialState);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (e) => {
    setState((prevItems) => ({
      ...prevItems,
      [prop]: e.target.value,
    }));
  };

  const signIn = () => {
    const user = "john@gmail.com";
    const pass = "johnjohn";

    if (state.email === user && state.password === pass) {
      setMessage({
        text: "Logged In Succesful",
        severity: "success",
      });
      setOpen(true);
      router.push("/HomePage");
    } else {
      setMessage({
        text: "Wrong credentials",
        severity: "error",
      });
      setOpen(true);
    }
  };

  const gotoRegister = () => {
    router.push("/Register");
  };

  return (
    <Box
      sx={{
        width: "150vh",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={style.typography}>
        Please Sign In
      </Typography>
      <Paper
        elevation={6}
        sx={{
          marginTop: "30px",
          width: "500px",
          height: "400px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

        <TextField
          label="Email Address"
          name="email"
          type="email"
          sx={{ marginTop: "22px", width: "400px", height: "80px" }}
          onChange={handleChange("email")}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "12px", width: "400px" }}
          onChange={handleChange("password")}
        />

        <Button
          variant="contained"
          sx={{
            marginTop: "32px",
            width: "400px",
          }}
          onClick={signIn}
        >
          Sign In
        </Button>

        <Box
          sx={{ diplay: "flex", justifyContent: "center", marginTop: "9px" }}
        >
          <Typography
            variant="h5"
            onClick={gotoRegister}
            sx={style.linkStyle}
          >
            Create new Account
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: "100%" }}
        >
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
