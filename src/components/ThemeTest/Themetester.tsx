import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import React from "react";

export const ThemeTester = () => {
  const defaultTheme = createTheme();

  return (
    <Box sx={styles.App}>
      <Typography> This is Just a Playground to test Theme colors</Typography>
      <Typography sx={styles.box1}>Secondary Main</Typography>
      <Typography sx={styles.box2}>secondary light</Typography>
      <Typography sx={styles.box3}>secondary Dark</Typography>
      <Typography sx={styles.box4}>Primary Main</Typography>
      <Typography sx={styles.box7}>background paper</Typography>
      <Typography sx={styles.box5}>Primary light</Typography>
      <Typography sx={styles.box6}>Primary Dark</Typography>
    </Box>
  );
};

const styles = {
  App: {
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  box1: { height: "150px", width: "150px", backgroundColor: "secondary.main" },
  box2: { height: "150px", width: "150px", backgroundColor: "secondary.light" },
  box3: { height: "150px", width: "150px", backgroundColor: "secondary.dark" },
  box4: { height: "150px", width: "150px", backgroundColor: "primary.main" },
  box5: { height: "150px", width: "150px", backgroundColor: "primary.light" },
  box6: { height: "150px", width: "150px", backgroundColor: "primary.dark" },
  box7: {
    height: "150px",
    width: "150px",
    backgroundColor: "background.paper",
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "space-around",
    gridAutoRows: "minmax(2vh, auto)",
    gap: "1%",
    backgroundColor: "#2b2e4a",
    height: "40vh",
    width: "30vw",
    borderRadius: "5px",
    padding: "2%",
    paddingTop: "4%",
    "@media (max-width:950px)": {
      height: "40vh",
      width: "50vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:650px)": {
      height: "40vh",
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
  },
};
