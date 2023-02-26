import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Biography } from "./biography";
import bun from "./bun.jpg";
import { ImageRound } from "./imageRound";

export const AboutMe = () => {
  //Array to be looped through to do the Typewriter effect
  const headingContent = ["Front-end", "Back-end", "Full-stack."];
  //Pushing each letter one by one into this state
  const [headingTypwriter, setHeadingTypwriter] = useState("");
  //Stop forces the typewriterLoop to only run once
  let stop = 0;

  let n = 0; //position in the array
  let i = 0; //position in string
  let j: string = ""; //string to be pushed into headingTypwriter
  let removing = false;
  //pushes each letter into the state
  const run = () => {
    setHeadingTypwriter(j);
  };
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  //actual loop that adds and removes things from the state
  const typewriterLoop = async () => {
    if (n < headingContent.length) {
      if (!removing && i < headingContent[n].length) {
        j = j + headingContent[n][i];
        run();
        i++;
      }

      if (removing && i <= headingContent[n].length) {
        i == 0
          ? ((j = " "), (removing = false), await delay(400), n++)
          : ((j = headingContent[n].slice(0, i)), run(), console.log(j), i--);
        console.log(i);
      }

      if (i == headingContent[n].length && n != headingContent.length - 1) {
        await delay(1000);
        removing = true;
      }

      setTimeout(typewriterLoop, 150);
    }
  };

  useEffect(() => {
    stop == 0 ? setTimeout(typewriterLoop, 1000) : null;
    stop = 1;
  }, []);

  return (
    <Box sx={styles.Container}>
      <ImageRound image={bun} />
      <Biography
        title={`From frustration to `}
        titleContent={` ${headingTypwriter}`}
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
