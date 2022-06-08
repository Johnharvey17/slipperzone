import {  Box } from "@mui/material";
import Image from "next/image";
import Signin from "./Signin";

export default function Signin2() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" ,marginTop:"50px" ,marginLeft:"30px"}}>
        <Image src="/Logo white.png" alt="logo" width={1900} height={600} margin/>
        <Signin />
      </Box>
    </Box>
  );
}
