import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkMode } from "../../Themes/themes";
import React from "react";
import { TextField } from "@mui/material";

export const ThemeTester = () => {
  const defaultTheme = createTheme();

  return (
    <Box sx={styles.App}>
      <Box sx={styles.box1}>Secondary Main</Box>
      <Box sx={styles.box2}>secondary light</Box>
      <Box sx={styles.box3}>secondary Dark</Box>
      <Box sx={styles.box4}>Primary Main</Box>
      <Box sx={styles.box7}>background paper</Box>
      <Box sx={styles.box5}>Primary light</Box>
      <Box sx={styles.box6}>Primary Dark</Box>
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
