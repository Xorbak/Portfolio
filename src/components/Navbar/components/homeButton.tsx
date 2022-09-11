import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import React from "react";
interface Props {
  handleCloseNavMenu: () => void;
}
export const HomeButton = ({ handleCloseNavMenu }: Props) => {
  return (
    <Typography variant="h6" sx={styles.NavbarItem}>
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
    </Typography>
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
