import { Paper, TextField, Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const style = {
  linkStyle: {
    cursor: "pointer",
    color: "#0818a6",
  },
};

function Register() {
  const router = useRouter();
  const gotoSignIn = () => {
    router.push("/Signin2");
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "80px",
          backgroundColor: "#E0DECA",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginLeft: "10px",
            fontFamily: "Impact Regular",
            fontSize: "35px",
          }}
        >
          SLippersZone
        </Typography>
        <Typography
          sx={{
            marginLeft: "20px",
            fontFamily: "Diwani  Simple Outline 2 Regular",
            fontSize: "25px",
          }} >
          Register
        </Typography>
      </Box>
    <Box sx={{backgroundColor: "#FFFFFF", height:"700px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography 
        sx={{
          marginTop:"30px", 
          fontFamily:"Cooper Black",
          fontSize:"45px"
          }} >
          Register
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            marginTop: "12px",
            width: "500px",
          }}
        >
          <TextField
            label="Email Address"
            type="email"
            sx={{ marginTop: "12px" }}
          />
          <TextField
            label="Password"
            type="password"
            sx={{ marginTop: "12px" }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            sx={{ marginTop: "12px" }}
          />
          <Button variant="contained" sx={{ marginTop: "12px" }}>
            Register
          </Button>
          <Box
            sx={{ diplay: "flex", justifyContent: "center", marginTop: "9px" }}
          >
            <Typography
              variant="subtitle2"
              onClick={gotoSignIn}
              sx={style.linkStyle}
            >
              Do you have account? Sign In
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
    </div>
  );
}
export default Register;
