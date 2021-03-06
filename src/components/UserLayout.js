import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function UserLayout({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const DrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const gotoPage = (url) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <Box>
      <Head>
        <title>SLippersZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar
        
        sx={{ padding: "0px", height: "70px", display: "block", border: "5px" }}
      >
        <Toolbar variant="dense">
          <IconButton onClick={DrawerOpen}>
            <Image
              src="/assets/svg/bars.svg"
              alt="bars"
              width="20px"
              height="20px"
            />
            
          </IconButton>

          <Avatar sx={{ margin: "5px", marginTop: "15px", marginLeft: "auto" }}>
            SZ
          </Avatar>
          <Typography
            variant="h5"
            textAlign="center"
            marginTop="10px"
            fontFamily="Raleway"
            fontWeight="bold"
          >
            SLippersZone
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            minWidth: "200px",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <List sx={{ flexGrow: 1 }}>
          
            <ListItem>
            <ListItemIcon>
                <Image
                  src="/assets/svg/user.svg"
                  alt="bars"
                  width="50px"
                  height="50px"
                />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
            <Divider />

            <ListItem
              button
              onClick={() => gotoPage("/HomePage")}
              selected={router.pathname.includes("HomePage")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/home.svg"
                  alt="bars"
                  width="20px"
                  height="20px"
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              onClick={() => gotoPage("/Products")}
              selected={router.pathname.includes("Products")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/product.svg"
                  alt="bars"
                  width="20px"
                  height="20px"
                />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>

            <ListItem
              button
              onClick={() => gotoPage("/AddtoCart")}
              selected={router.pathname.includes("AddtoCart")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/addtocart.svg"
                  alt="bars"
                  width="20px"
                  height="20px"
                />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem
              button
              onClick={() => gotoPage("/About")}
              selected={router.pathname.includes("About Us")}
            >
              <ListItemIcon>
                <Image
                  src="/assets/svg/note.svg"
                  alt="bars"
                  width="20px"
                  height="20px"
                />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>

          </List>

          <Divider />
          <List>
            <ListItem button onClick={() => gotoPage("/Signin2")}>
              <ListItemIcon>
                <Image
                  src="/assets/svg/signout.svg"
                  alt="bars"
                  width="20px"
                  height="20px"
                />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      
        <Box> 
        {children}
        </Box>
    </Box>
  );
}


