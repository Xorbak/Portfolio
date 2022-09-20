import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const Pipeline = () => {
  return (
    <Box sx={styles.App}>
      <Box sx={styles.Container}>
        <MenuItem>
          Fix Helper text on Registration form --- edit helper text in theme
        </MenuItem>
        <MenuItem>
          Make Deleted box for Todo list to recover deleted items
        </MenuItem>
        <MenuItem>Add Geolocation to show what City user is in</MenuItem>
        <MenuItem>
          Use Geolocation to show weather where user currently is
        </MenuItem>
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
  Container: { backgroundColor: "background.paper", borderRadius: "5px" },
};
