import { Paper, Box, Button, Typography, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";

import UserLayout from "../components/UserLayout.js";

const style = {
  paper1: {
    width: "300px",
    height: "290px",
    boxShadow: "0 5px 6px 1px blue",
  },
  paper2: {
    width: "300px",
    height: "290px",
    marginLeft: "40px",
    boxShadow: "0 5px 6px 1px blue",
  },
  box1: {
    marginTop: "100px",
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
};

export default function Products() {
  return (
    <Box sx={{ width: "100%", marginTop: "70px", height: "1500" }}>
      <Box sx={style.box1}>
        <Paper variant="outlined" sx={style.paper1}>
          <Image
            src="/Tsinelas8-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Marche Slide kanye west for women
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas9-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Adidas Adilette slide -white
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas3-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Beach walk- Black
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas6-edited.jpg.png"
            alt="berkinstock"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Berkinstock for ladies- white
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas10.png"
            alt="tsinelas"
            width={250}
            height={200}
            objectPosition="center"
          />
          <Typography sx={{ textAlign: "center" }}>
            Marche Slide kanye west for women
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas2-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Adidas Adilette slide -white
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas1-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Adidas Adilette slide -white
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
            src="/Tsinelas5-edited.jpg.png"
            alt="tsinelas"
            width={300}
            height={200}
          />
          <Typography sx={{ textAlign: "center" }}>
            Adidas Adilette slide -white
          </Typography>
          <IconButton sx={{ marginLeft: "55px" }}>
            <Image
              src="/assets/cart.svg"
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
  );
}

Products.getLayout = function getLayout(page) {
  return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
};
