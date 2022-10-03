import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export const Playground = () => {
  return (
    <Box sx={styles.App}>
      <Typography>Playground to test things I am not certain of</Typography>
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
