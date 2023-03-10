import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { AboutMe } from "../components/AboutMe/AboutMe";
import mongoose from "mongoose";

export const Home = () => {
  return (
    <Box sx={styles.App}>
      <AboutMe />
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
};
