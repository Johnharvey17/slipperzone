import React from 'react';
import UserLayout from "../components/UserLayout.js";
import Slideshow from '../components/slideshow.js';
import Image from "next/image";
import { Box } from '@mui/system';


export default function HomePage() {
  return (
    <Box>
    <Box sx={{marginTop:"90px", marginLeft:"230px"}}>
      
      <Image src="/imges/promo.png" alt="promo" width="1200px" height="500px" />
    </Box>
  
  </Box>  
  )
}

HomePage.getLayout = function getLayout(page){
return <UserLayout sx={{marginTop:"100px"}}>
  {page}
</UserLayout> 
}
