import React from "react";
import UserLayout from "../components/UserLayout.js";
import Image from "next/image";
import { Box, Paper, Typography,IconButton } from "@mui/material";
import {useRouter} from "next/router";

export default function HomePage() {
  const router= useRouter();

  const gotoProducts=() =>{
    router.push("/Products");

  };
  return (
    <Box>
      <Box sx={{ marginTop: "90px", display: "flex", justifyContent:"center" }}>
        <Image
          src="/imges/promo.png"
          alt="promo"
          width="1200px"
          height="500px"
        />
      </Box>
      <Box  sx={{marginTop:"40px"}}>
        <Paper sx={{margin:"30px" ,height: "660px"}}>
        <Typography sx={{fontFamily:"haettenschweiler Regular", fontSize:"30px", margin:"13px"}}>Brands Available</Typography>
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection:"row" , justifyContent:"center"}}>
        <Paper >
          <Image src="/prodImages/adidas3.png" alt="adidas brand" width="350px" height="350px"/>
        </Paper>
        <Paper sx={{marginLeft:"20px"}}>
          <Image src="/prodImages/branislander.png" alt="adidas brand" width="350px" height="350px"/>
        </Paper>
        <Paper sx={{marginLeft:"20px"}}>
          <Image src="/prodImages/beachwalkbrand.png" alt="adidas brand" width="350px" height="350px"/>
        </Paper>
        <Paper sx={{marginLeft:"20px"}}>
          <Image src="/prodImages/birkenstokbrand.png" alt="adidas brand" width="350px" height="350px"/>
        </Paper>
        </Box>
        <Box sx={{ marginTop: "30px", display: "flex", justifyContent:"center"}}>
        <IconButton  onClick={gotoProducts}>
            <Image
              src="/prodImages/buynow.png"
              alt="shop-now"
              width="400px"
              height="150px"
            />
           </IconButton>
           </Box>
        </Paper>
        
      </Box>
    </Box>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
};
