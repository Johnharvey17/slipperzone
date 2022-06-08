import {  Box, Typography } from "@mui/material";
import Image from "next/image";
import Signin from "./Signin.js";
import React from "react";
export default function Signin2() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" , backgroundColor:"#F9F9F9"}}>
        
        <Image src="/Logo white.png" alt="logo" width={1500} height={600} />
        <Signin />
      </Box>
    </Box>
  );
}
