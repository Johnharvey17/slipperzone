import React from 'react'
import {AppBar, Toolbar, Avatar, Typography, IconButton, Drawer
    , ListItem, ListItemIcon,List,ListItemText, Divider} from '@mui/material'
import Image from 'next/image'
import { Box } from '@mui/system'
import {useState} from "react";
import {useRouter} from 'next/router'



function Appbar() {

const [open, setOpen] =useState(false);
const router= useRouter();
const DrawerOpen = () =>{
    setOpen(true);
};
const handleClose =() =>{
    setOpen(false);
};
const gotoHome =() =>{
router.push("/Home")
}
const gotoSignin =() =>{
    router.push("/Signin")
    }

  return (
    <Box>
  <AppBar position='s'  
            sx={{padding:'0px', 
            margin:'0px',
            
            height: "70px", 
            display:'block',
            border: '5px'}}>
    <Toolbar variant="dense">

        <IconButton onClick={DrawerOpen}>
            <Image src="/assets/svg/bars.svg" alt="bars" width={20} height={20} marginTop={10} />
        </IconButton>

         <Avatar 
             sx={{margin:'5px',
             marginTop: '10px',
             marginLeft:'auto'}}>
                SZ
         </Avatar>
        <Typography 
            variant="h5" 
            textAlign="center"
            marginTop="10px" 
            fontFamily="Raleway"
            fontWeight="bold">
                SLippersZone
        </Typography>
    </Toolbar>
  </AppBar>

<Drawer anchor="left"  open={open} onClose={handleClose}>
    <Box sx={{minWidth: "200px", display:"flex", height:"100vh", flexDirection:"column"}}>
        <List sx={{ flexGrow:1}}>
        <ListItem button>
                <ListItemIcon>
                    <Image src="/assets/svg/home.svg" alt="bars" width={20} height={20}/>
                </ListItemIcon> 
            <ListItemText primary="Home"/>
        </ListItem>
        <Divider/>
             
        <ListItem button  onClick={gotoHome}>
                <ListItemIcon>
                    <Image src="/assets/svg/home.svg" alt="bars" width={20} height={20}/>
                </ListItemIcon> 
            <ListItemText primary="Home"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <Image src="/assets/svg/home.svg" alt="bars" width={20} height={20}/>
            </ListItemIcon> 
            <ListItemText primary="Products"/>
        </ListItem>
        </List>

            <Divider/>
            <List>
            <ListItem button onClick={gotoSignin}>
            <ListItemIcon>
                <Image src="/assets/svg/signout.svg" alt="bars" width={20} height={20}/>
            </ListItemIcon> 
            <ListItemText primary="Sign out"/>
        </ListItem>
            </List>

    </Box>
</Drawer>
</Box>
  )
}

export default Appbar