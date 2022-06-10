import React from 'react'
import {Box, Typography} from "@mui/material";
import UserLayout from "../components/UserLayout.js";
function AddtoCart() {
  return (
    <div><Box
    sx={{
        marginTop:"70px",
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
        fontSize:"35px" }}>
      SLippersZone
    </Typography>
    <Typography sx={{ marginLeft: "20px",fontFamily: "Diwani  Simple Outline 2 Regular",
        fontSize:"25px" }}>Log in</Typography>
  </Box></div>
  )
}

export default AddtoCart;

AddtoCart.getLayout = function getLayout(page) {
    return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
  };