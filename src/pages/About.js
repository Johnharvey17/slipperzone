import { Box, Paper, Typography, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import UserLayout from "../components/UserLayout";
function About() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{marginTop:"100px", width: "700px", height: "700px" }}>
        <Typography 
        sx={{
             textAlign: "center",
             fontFamily: "Impact Regular",
            fontSize:"35px"}}>
                About us
                </Typography>
        <Typography 
        sx={{ 
            margin: "20px", 
            textAlign: "center",
            fontFamily: "Arial rounded MT Bold" ,
            fontSize:" 30px"
            }}>
          SLippersZone si a type of e-commerse platform this main Store Located
          in Sta. Maria Bulacan. This online store is created because we want to
          keep up with the trends.
        </Typography>
        <Typography sx={{ 
            margin: "20px", 
            textAlign: "center",
            fontFamily: "Arial rounded MT Bold" ,
            fontSize:" 30px"
            }}>
          We believe online shopping should be accessible, easy and enjoyable.
          This is the vision SLippersZone aspires to deliver on the platform,
          every single day.
        </Typography>
        <Typography sx={{ marginLeft: "150px" }}>We Are Located at:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/svg/location.svg"
            alt="Location"
            width={30}
            height={30}
          />
          <Typography sx={{ marginleft: "15px" }}>
            Sta. Maria Bulacan
          </Typography>
        </Box>
        <Typography sx={{ marginLeft: "150px", marginTop: "30px" }}>
          Contact us:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/svg/mobile.svg"
            alt="Location"
            width={30}
            height={30}
          />
          <Typography>09313123432</Typography>
        </Box>
        <Typography sx={{ marginLeft: "150px", marginTop: "30px" }}>
          Follow on our Social media::
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton sx={{ marginLeft: "15px" }}>
            <Image
              src="/imges/facebook.png"
              alt="cart"
              width="50px"
              height="50px"
            />
            <Typography variant="h6" marginLeft="12px">
              Facebook
            </Typography>
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton sx={{ marginLeft: "15px" }}>
              <Image
                src="/imges/inst.png"
                alt="cart"
                width="50px"
                height="50px"
              />
              <Typography variant="h6" marginLeft="12px">
                Instagram
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default About;

About.getLayout = function getLayout(page) {
    return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
  };
