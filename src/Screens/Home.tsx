import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import React from "react";
import { darkMode } from "../Themes/themes";

export const Home = () => {
  <ThemeProvider theme={darkMode}></ThemeProvider>;
  return <Box sx={styles.App}>Home</Box>;
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
};
