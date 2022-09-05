import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import React from "react";

export const HomeButton = () => {
  return (
    <Typography variant="h6">
      <Button id="basic-button" size="large">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <Box sx={{ color: "text.primary" }}>Home</Box>
        </NavLink>
      </Button>
    </Typography>
  );
};
