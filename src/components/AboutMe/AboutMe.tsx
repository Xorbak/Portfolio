import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Biography } from "./biography";
import bun from "./bun.jpg";
import { ImageRound } from "./imageRound";

export const AboutMe = () => {
  const [headingContent, setHeadingContent] = useState([
    "Front-end",
    "Back-end",
    "Full-stack.",
  ]);
  const [headingTypwriter, setHeadingTypwriter] = useState("");

  let stop = 0;
  let n = 0;
  let i = 0;
  let j: string = "";
  let removing = false;

  const run = () => {
    setHeadingTypwriter(j);
  };

  const loop = () => {
    if (n < headingContent.length) {
      if (!removing && i < headingContent[n].length) {
        j = j + headingContent[n][i];
        run();
        console.log(headingContent[n][i]);
        i++;
      }

      if (removing && i <= headingContent[n].length) {
        j = headingContent[n].slice(0, i);
        run();
        console.log(j);
        i--;
      }

      if (i == headingContent[n].length && n != headingContent.length - 1) {
        removing = true;
      }
      if (removing && i == 0) {
        n++;
        j = "";
        removing = false;
      }
      setTimeout(loop, 150);
    }
  };

  useEffect(() => {
    stop == 0 ? loop() : null;
    stop = 1;
  }, []);
  return (
    <Box sx={styles.Container}>
      <ImageRound image={bun} />
      <Biography
        title={`From frustration to ${headingTypwriter}`}
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
