import {  Box, Typography } from "@mui/material";
import Image from "next/image";
import Signin from "./Signin.js";

export default function Signin2() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" ,marginTop:"50px" ,marginLeft:"30px"}}>
        <Typography>dasdasd</Typography>
        <Image src="/Logo white.png" alt="logo" width={1900} height={600} margin/>
        <Signin />
      </Box>
    </Box>
  );
}
