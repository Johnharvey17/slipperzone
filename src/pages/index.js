import {  Typography, Box } from '@mui/material'
import Head from 'next/head'
import Signin from './Signin'



export default function Home() {
  
  return (
    <Box >
      <Head>
        <title>SLippersZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{backgroundColor:"#FEFBE7"}}>
      <Typography >
          SLippersZone
        </Typography>
        </Box> 
       
         <Signin/>
     
       

      
    </Box>
  );
}

