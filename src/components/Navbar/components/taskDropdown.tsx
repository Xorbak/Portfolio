import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//@ts-ignore
export const TaskDropdown = () => {
  //handels the opening and closing of the dropdown
  const [anchorElTasks, setAnchorElTasks] = useState<null | HTMLElement>(null);
  const openTasks = Boolean(anchorElTasks);
  const handleClickTasks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTasks(event.currentTarget);
  };
  const handleCloseTasks = () => {
    setAnchorElTasks(null);
  };

  return (
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
};

const styles = {
  NavbarItem: {
    padding: "1%",
    textDecoration: "none",
    color: "text.primary",
  },
};
