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
import {
  darkMode,
  defaultTheme,
  cottonCandy,
  morningCoffee,
  SeaSideEve,
  summer,
  fall,
  winter,
  spring,
} from "../../Themes/themes";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export function Navbar({ setCurrentTheme }: Props) {
  //dropdown logic for Tasks
  const [anchorElTasks, setAnchorElTasks] = React.useState<null | HTMLElement>(
    null
  );
  const openTasks = Boolean(anchorElTasks);
  const handleClickTasks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTasks(event.currentTarget);
  };
  const handleCloseTasks = () => {
    setAnchorElTasks(null);
  };
  //dropdown Logic for Themes
  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(
    null
  );
  const openTheme = Boolean(anchorElTheme);
  const handleClickTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTheme(event.currentTarget);
  };
  const handleCloseTheme = () => {
    setAnchorElTheme(null);
  };

  const themeDropDown = (
    <Typography variant="h6" sx={styles.NavbarItem}>
      <Button
        id="basic-button"
        aria-controls={openTheme ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openTheme ? "true" : undefined}
        onClick={handleClickTheme}
        size="large"
        sx={{ color: "text.primary" }}
      >
        Themes
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorElTheme}
        open={openTheme}
        onClose={handleCloseTheme}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setCurrentTheme(defaultTheme);
            handleCloseTheme;
          }}
        >
          Default
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentTheme(SeaSideEve);
            handleCloseTheme;
          }}
        >
          Sea Side Evening
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentTheme(cottonCandy);
            handleCloseTheme;
          }}
        >
          Cotton Candy
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentTheme(morningCoffee);
            handleCloseTheme;
          }}
        >
          Morning Coffee
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentTheme(darkMode);
            handleCloseTheme;
          }}
        >
          Dark mode
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentTheme(summer);
            handleCloseTheme;
          }}
        >
          Summer
        </MenuItem>{" "}
        <MenuItem
          onClick={() => {
            setCurrentTheme(fall);
            handleCloseTheme;
          }}
        >
          Fall
        </MenuItem>{" "}
        <MenuItem
          onClick={() => {
            setCurrentTheme(winter);
            handleCloseTheme;
          }}
        >
          Winter
        </MenuItem>{" "}
        <MenuItem
          onClick={() => {
            setCurrentTheme(spring);
            handleCloseTheme;
          }}
        >
          Spring
        </MenuItem>
      </Menu>
    </Typography>
  );
  const TaskDropDown = (
    <Typography variant="h6" sx={styles.NavbarItem}>
      <Button
        id="basic-button"
        aria-controls={openTasks ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openTasks ? "true" : undefined}
        onClick={handleClickTasks}
        size="large"
        sx={{ color: "text.primary" }}
      >
        Tasks
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorElTasks}
        open={openTasks}
        onClose={handleCloseTasks}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ color: "text.primary" }}
      >
        <NavLink
          to="/To-do"
          style={{
            textDecoration: "none",
          }}
        >
          <MenuItem sx={{ color: "text.primary" }} onClick={handleCloseTasks}>
            To-Do
          </MenuItem>
        </NavLink>
        <NavLink to="/Registration" style={{ textDecoration: "none" }}>
          <MenuItem sx={{ color: "text.primary" }} onClick={handleCloseTasks}>
            Registration form
          </MenuItem>
        </NavLink>
        <NavLink
          to="/ThemeTest"
          style={{
            textDecoration: "none",
          }}
        >
          <MenuItem sx={{ color: "text.primary" }} onClick={handleCloseTasks}>
            Theme test
          </MenuItem>
        </NavLink>
        <NavLink
          to="/TipCalc"
          style={{
            textDecoration: "none",
          }}
        >
          <MenuItem sx={{ color: "text.primary" }} onClick={handleCloseTasks}>
            Tip Calculator
          </MenuItem>
        </NavLink>
      </Menu>
    </Typography>
  );

  const HomeButton = (
    <Typography variant="h6">
      <Button id="basic-button" size="large">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <Box sx={{ color: "text.primary" }}>Home</Box>
        </NavLink>
      </Button>
    </Typography>
  );

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
          {HomeButton}
          {TaskDropDown}
          {themeDropDown}
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
