import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { ThemeDropDown } from "./components/themeDropdown";
import { TaskDropdown } from "./components/taskDropdown";
import { HomeButton } from "./components/homeButton";

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export function Navbar({ setCurrentTheme }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <HomeButton />
          <TaskDropdown />
          <ThemeDropDown setCurrentTheme={setCurrentTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const styles = {
  NavbarItem: {
    padding: "1%",
    textDecoration: "none",
    color: "text.primary",
  },
};
