import { Paper,Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import UserLayout from "../components/UserLayout"
const style={
  paper1:{
    width:"300px", 
    height:"300px",
   
  },
  box1:{
    marginTop:"50px", 
    marginLeft:"50px", 
    display:"flex", 
    flexDirection:"row"
  },
  box2:{
    marginTop:"20px", 
    marginLeft:"50px", 
    display:"flex", 
    flexDirection:"row"
  },
};

export default function Products() {
  return (
    <Box>
      <Typography sx={{marginTop:"12px",textAlign:"center"}}>
        Products
      </Typography>
    <Box sx={style.box1}>
      <Paper variant="outlined"  sx={style.paper1}>
        <Image src="/Tsinelas8-edited.jpg.png" alt="tsinelas" width={300} height={200} />
        <Typography sx={{textAlign:"center"}}>
        Marche Slide kanye west for women
      </Typography>
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas9-edited.jpg.png" alt="tsinelas" width={300} height={200} /> 
        <Typography sx={{textAlign:"center"}}>
        Adidas Adilette slide -white
      </Typography>
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas3-edited.jpg.png" alt="tsinelas" width={300} height={200} />
        <Typography sx={{textAlign:"center"}}>
        Beach walk- Black
      </Typography>
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas6-edited.jpg.png" alt="berkinstock" width={300} height={200} />
        <Typography sx={{textAlign:"center"}}>
        Berkinstock for ladies- white
      </Typography>
      </Paper>
    </Box>

    <Box sx={style.box2}>
      <Paper variant="outlined"  sx={style.paper1}>
        <Image src="/Tsinelas8-edited.jpg.png" alt="tsinelas" width={300} height={200} />
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas9-edited.jpg.png" alt="tsinelas" width={300} height={200} /> 
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas3-edited.jpg.png" alt="tsinelas" width={300} height={200} />
      </Paper>

      <Paper variant="outlined"  sx={{width:"300px", height:"300px", marginLeft:"20px"}}>
        <Image src="/Tsinelas6-edited.jpg.png" alt="tsinelas" width={300} height={200} />
      </Paper>
    </Box>

    </Box>
  )
}
Products.getLayout = function getLayout(page){
    return <UserLayout sx={{marginTop:"100px"}}>
      {page}
    </UserLayout> 
    }