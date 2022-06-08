import { Paper, Box, Button, Typography } from "@mui/material";
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
    marginLeft: "20px",
    boxShadow: "0 5px 6px 1px blue",
  },
  box1: {
    marginTop: "30px",
    marginLeft: "80px",
    marginRight: "50px",
    display: "flex",
    flexDirection: "row",
  },
  box2: {
    marginTop: "20px",
    marginLeft: "80px",
    marginRight: "50px",
    display: "flex",
    flexDirection: "row",
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
      <Typography variant="h2" sx={{ marginTop: "12px", textAlign: "center" }}>
        Products
      </Typography>
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
          <Typography sx={{ textAlign: "center" }}>
            Beach walk- Black
          </Typography>
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
        </Paper>
      </Box>
    </Box>
  );
}
Products.getLayout = function getLayout(page) {
  return <UserLayout sx={{ marginTop: "100px" }}>{page}</UserLayout>;
};
