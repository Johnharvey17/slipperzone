import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {useRouter} from "next/router";

function Product1() {
  const router= useRouter();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setQuantity(event.target.quantity);
  };

  const [quantity, setQuantity] = useState("");
    
      const gotoProducts = () => {
        router.push("/Products");
      };


  return (
    <Box>
      <Head>
        <title>SLippersZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "80px",
          backgroundColor: "#E0DECA",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginLeft: "10px",
            fontFamily: "Impact Regular",
            fontSize: "35px",
          }}
        >
          SLippersZone
        </Typography>
      </Box>
      <Box>
        <Paper
          className="lahat"
          sx={{
            height: "600px",
            marginTop: "30px",
            marginLeft: "30px",
            marginRight: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Paper
            className="Picture"
            elevation={6}
            sx={{
              width: "400px",
              height: "400px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          >
            <Image
              src="/prodImages/Tsinelas8-edited.jpg.png"
              alt="Marche Slide Kanye west"
              width="350px"
              height="300px"
            />
          </Paper>
          <Box
            className="Description"
            sx={{ marginLeft: "20px", marginTop: "30px" }}
          >
            <Typography
              sx={{
                fontFamily: "Arial Rounded MT Bold",
                fontSize: "35px",
              }}
            >
              Marche Slide Kanye west
            </Typography>

            <Typography sx={{ fontSize: "35px" }}>₱1800</Typography>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box>
                <Typography sx={{ fontSize: "25px" }}>Shipping</Typography>
              </Box>
              <Box sx={{ marginLeft: "20px" }}>
                <Typography>Shipping Discount</Typography>
                <Typography>Shipping Discount for order over P500</Typography>
                <Image
                  src="/assets/shipping.svg"
                  alt="shipping"
                  width={30}
                  height={30}
                />
                <Box sx={{ display: "flex", flexDirection: "column   " }}>
                  <Typography sx={{ fontSize: "25px" }}>
                    ₱0- 50 Nation Wide
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "10px",
                marginTop: "15px",
              }}
            >
              <Typography>Size</Typography>
              <FormControl sx={{ width: "200px", marginLeft: "15px" }}>
                <InputLabel>Size</InputLabel>
                <Select
                  labelId="select-demo"
                  value={value}
                  onChange={handleChange}
                >
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="6.5">6.6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="7.5">7.5</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="8.5">8.5</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="9.5">9.5</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginTop: "15px",
                }}
              >
                <Typography>Quantity</Typography>
                <FormControl sx={{ width: "200px", marginLeft: "40px" }}>
                  <InputLabel>Quantity</InputLabel>
                  <Select
                    labelId="select-demo"
                    value={quantity}
                    onChange={handleChange}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ marginTop: "50px",display: "flex", flexDirection: "column" }}>
              <Button variant="outlined">
                Add to cart
              </Button>
              <Button variant="outlined" sx={{marginTop:"12px"}} onClick={gotoProducts}>
                  Return
              </Button>
              </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Product1;
