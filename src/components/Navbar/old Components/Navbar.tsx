/**/ import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeOptions } from "@mui/material/styles";

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
            <MenuIcon
              onClick={() => {
                alert("Not yet implemented, Coming soon");
              }}
            />
          </IconButton>
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
