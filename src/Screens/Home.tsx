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
          display: "flex",
          paddingTop: { xs: "50px", md: "0px" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          component="img"
          src={bun} //image placeholder
          sx={{
            boxShadow: 3,

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
          <Typography sx={styles.borderLine}></Typography>
          <Box
            // change the sizes in the themes this is still too big
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              alignItems: "start",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                textAlign: "start",
                alignItems: "start",
                justifyContent: "start",
                marginBottom: "10px",
              }}
              variant="body1"
            >
              From frustration to frontend.
            </Typography>
            <Typography variant="body2">
              I've been coding on and off for the last 2 years. Dipping my toes
              in various different languages but never leaving TUTORIAL HELL in
              any of them. Untill I decided to just start building minor
              projects that slowly morphed into a Portfolio. From there I
              discoverd my love for coding(Cliche I know..) and it became less
              of a necessity and more of a way to calm my mind(most of the
              time). From that point of view I focus less on Quantity and more
              on Quality. Learning how I can refactor and improve my current set
              of components. In doing so understanding the underlying concepts
              much better than just blindly building a mountain of suboptimal
              components.
            </Typography>
            <Typography sx={{ marginTop: "10px" }} variant="caption">
              PS. Enjoy the photo of my rabbit discovering the outside world for
              the first time
            </Typography>
          </Box>
          <Typography
            // biography ends here
            sx={styles.borderLine}
          ></Typography>
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
    justifyContent: { sm: "start", md: "center" },
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
