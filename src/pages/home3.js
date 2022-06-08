import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function () {
  return (
    <Box sx={{marginTop:"50px", width:"%"}}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row", 
          width: "250%",
          height: "250px",
          position:"relative"
        }}
      >
        <Avatar
          src="/adidas3.png"
          alt="adidas"
          sx={{
            width: "220px",
            height: "200px",
            marginTop: "25px",
            marginLeft: "70px",
          }}
        ></Avatar>
      
          <Typography variant="h4" sx={{marginTop:"25px" ,marginLeft:"12px"}}>
            Adidas
          </Typography>
          <Avatar
          src="/adidas3.png"
          alt="adidas"
          sx={{
            width: "220px",
            height: "200px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        ></Avatar>
      
          <Typography variant="h4" sx={{marginTop:"25px" ,marginLeft:"12px"}}>
            Adidas
          </Typography>
          <Avatar
          src="/adidas3.png"
          alt="adidas"
          sx={{
            width: "220px",
            height: "200px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        ></Avatar>
      
          <Typography variant="h4" sx={{marginTop:"25px" ,marginLeft:"12px"}}>
            Adidas
       
          </Typography>
          <Avatar
          src="/adidas3.png"
          alt="adidas"
          sx={{
            width: "220px",
            height: "200px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        ></Avatar>
      
          <Typography variant="h4" sx={{marginTop:"25px" ,marginLeft:"12px"}}>

          </Typography>
         
         
        
      </Paper>
    </Box>
  );
}
