import { Paper, Box, Button, Typography, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import UserLayout from "../components/UserLayout.js";
import {useRouter} from "next/router"

const style = {
  paper1: {
    width: "300px",
    height: "340px",
    boxShadow: "0 5px 6px 1px blue",
    marginTop:"30px"
  },
  paper2: {
    width: "300px",
    height: "340px",
    marginLeft: "40px",
    boxShadow: "0 5px 6px 1px blue",
    marginTop:"30px"
  },
  box1: {
   
    marginLeft: "100px",
    marginRight: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  box2: {
    marginTop: "20px",
    marginLeft: "100px",
    marginRight: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  Typography1: {
    marginTop: "12px",
    textAlign: "center",
    fontFamily: "",
  },
  typho:{
    textAlign: "center",
    fontFamily:"Gill sans",
    fontSize: "20px"

  },
};

export default function Products() {
const router=useRouter();

const gotoProduct1 =() =>{
router.push("/Product1")
};
const gotoProduct2 =() =>{
  router.push("/Product2")
  };
  const gotoProduct3 =() =>{
    router.push("/Product3")
    };
    const gotoProduct4 =() =>{
      router.push("/Product4")
      };
      const gotoProduct5 =() =>{
        router.push("/Product5")
        };
        const gotoProduct6 =() =>{
          router.push("/Product6")
          };
          const gotoProduct7 =() =>{
            router.push("/Product7")
            };
            const gotoProduct8 =() =>{
              router.push("/Product8")
              };


  return (
    <Box sx={{height:"1200px"}}>
    <Box
        sx={{
          marginTop:"70px",
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
            fontSize:"35px" }}>
          Shop Now
        </Typography>
        
      </Box>
    <Box sx={{ width: "100%",height:"900px", backgroundColor:"#FFFFFF" }}>
      <Box sx={style.box1}>
        <Paper variant="outlined" sx={style.paper1}>
          <Image
            src="/prodImages/Tsinelas8-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Marche Slide kanye west 
          </Typography>
          <Typography sx={style.typho}>
          ₱1800
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct1}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2}>
          <Image
            src="/prodImages/Tsinelas9-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Adidas Adilette slide -white
          </Typography>
          <Typography sx={style.typho}>
          ₱1600
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct2}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2}>
          <Image
            src="/prodImages/Tsinelas3-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Beach walk- Black
          </Typography>
          <Typography sx={style.typho}>
          ₱160
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct3}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2} onClick={gotoProduct4}>
          <Image
            src="/prodImages/Tsinelas6-edited.jpg.png"
            alt="berkinstock"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Berkinstock for ladies- white
          </Typography>
          <Typography sx={style.typho}>
          ₱2500
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct5}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>
      </Box>
      <Box sx={style.box2}>
        <Paper variant="outlined" sx={style.paper1}>
          <Image
            src="/prodImages/Tsinelas10.png"
            alt="tsinelas"
            width={250}
            height={200}
            objectPosition="center"
          />
          <Typography sx={style.typho}>
            Adidas Adillet Slide Black
          </Typography>
          <Typography sx={style.typho}>
          ₱1600
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct6}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2}>
          <Image
            src="/prodImages/Tsinelas2-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Beach walk
          </Typography>
          <Typography sx={style.typho}>
          ₱150
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct7}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2}>
          <Image
            src="/prodImages/Tsinelas1-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Islander sandals -Dark Blue
          </Typography>
          <Typography sx={style.typho}>
          ₱400
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }} onClick={gotoProduct8}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>

        <Paper variant="outlined" sx={style.paper2}>
          <Image
            src="/prodImages/Tsinelas5-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={style.typho}>
            Birkenstock -white
          </Typography>
          <Typography sx={style.typho}>
          ₱2500
          </Typography>
          <IconButton sx={{ marginLeft: "1px" }} onClick={gotoProduct8}>
            <Image
              src="/assets/svg/addtocart.svg"
              alt="cart"
              width="30px"
              height="30px"
            />
            <Typography variant="h6" marginLeft="12px">
              Add to Cart
            </Typography>
          </IconButton>
        </Paper>
      </Box>
    </Box>
    </Box>
  );
}

Products.getLayout = function getLayout(page) {
  return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
};
