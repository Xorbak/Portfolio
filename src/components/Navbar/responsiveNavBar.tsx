import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { TaskDropdown } from "./components/taskDropdown";
import { HomeButton } from "./components/homeButton";
import { ThemeDropDown } from "./components/themeDropdown";
import { ThemeOptions } from "@mui/material/styles";
//Refactor, works but its messy
const pages = ["Home", "Tasks", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const ResponsiveAppBar = ({ setCurrentTheme }: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuItem = (i: any) => {
    let component;
    switch (i) {
      case "Home":
        component = <HomeButton handleCloseNavMenu={handleCloseNavMenu} />;
        break;
      case "Tasks":
        component = <TaskDropdown handleCloseNavMenu={handleCloseNavMenu} />;
        break;
      default:
        component = (
          <ThemeDropDown
            handleCloseNavMenu={handleCloseNavMenu}
            setCurrentTheme={setCurrentTheme}
          />
        );
    }
    return component;
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{menuItem(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Box key={page} sx={{ my: 2, color: "white", display: "block" }}>
                {menuItem(page)}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
