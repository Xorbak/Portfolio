import Box from "@mui/material/Box";
import React from "react";
import { Biography } from "./biography";
import bun from "./bun.jpg";
import { ImageRound } from "./imageRound";

export const AboutMe = () => {
  return (
    <Box sx={styles.Container}>
      <ImageRound image={bun} />
      <Biography
        title="From frustration to frontend."
        body="I've been coding on and off for the last 2 years. Dipping my toes in
          various languages but never leaving TUTORIAL HELL in any of them.
          Untill I decided to just start building minor projects that slowly
          morphed into a Portfolio. From there I discoverd my love for
          coding(Cliche I know..) and it became less of a necessity and more of
          a way to calm my mind(most of the time). From that point of view I
          focus less on Quantity and more on Quality. Learning how I can
          refactor and improve my current set of components. In doing so
          understanding the underlying concepts much better than just blindly
          building a mountain of suboptimal components."
        caption="PS. Enjoy the photo of my rabbit discovering the outside world for the
          first time"
      />
    </Box>
  );
};

const styles = {
  Container: {
    width: "80vw",
    color: "text.primary",
    minheight: "200px",
    display: "flex",
    paddingTop: { xs: "50px", md: "0px" },
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "space-around",
  },
};
