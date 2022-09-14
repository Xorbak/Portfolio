import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import React from "react";

import bun from "./bun.jpg";

export const Home = () => {
  return (
    <Box sx={styles.App}>
      <Box
        sx={{
          width: "80vw",
          color: "text.primary",
          minheight: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            component="img"
            src={bun} //image placeholder
            sx={{
              boxShadow: 3,
              backgroundColor: "red",
              height: "200px",
              width: "200px",
              borderRadius: "300px",
            }}
          ></Box>
          <Box // biography paragraph starts here
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={styles.borderLine}></Box>
            <Typography
              sx={{
                display: "flex",
                textAlign: "start",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptates eum aspernatur aliquam! Deserunt autem excepturi modi
              perferendis iusto reiciendis, minus, ab cupiditate enim doloremque
              unde aspernatur dolore eius aliquid.
            </Typography>{" "}
            <Box
              // biography ends here
              sx={styles.borderLine}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  borderLine: {
    borderBottom: "1px solid",
    borderColor: "primary.main",
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20%",
  },
};
