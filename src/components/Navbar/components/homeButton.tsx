import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

interface Props {
  handleCloseNavMenu: () => void;
}

export const HomeButton = ({ handleCloseNavMenu }: Props) => {
  return (
    <Box sx={styles.NavbarItem}>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button
          onClick={handleCloseNavMenu}
          id="basic-button"
          size="large"
          sx={styles.NavbarItem}
        >
          Home
        </Button>
      </NavLink>
    </Box>
  );
};

const styles = {
  NavbarItem: {
    color: "text.primary",
    "&:hover": {
      backgroundColor: "transparent",
      color: "primary.main",
      top: "+2px",
    },
  },
};
