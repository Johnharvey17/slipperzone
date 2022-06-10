import React from 'react'
import {Box, Typography,Paper} from "@mui/material";
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
      Cart
    </Typography>
  </Box> 
  <Box sx={{marginTop:"80px"}}> 
  <Paper elevation={6} 
      sx={{
        marginTop:"50px",
        marginLeft:"70px",
        marginRight:"50px", 
        width:"1300px",
        height:"400px"}}>
            <Typography     >
                No products yet
            </Typography>
             </Paper>
</Box> 
      
  </div>
  )
}

export default AddtoCart;

AddtoCart.getLayout = function getLayout(page) {
    return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
  };