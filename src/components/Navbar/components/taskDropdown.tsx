import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Taskitem } from "./taskItem";

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
        sx={styles.NavbarItem}
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
        <Taskitem
          handleCloseTasks={handleCloseTasks}
          location="/ThemeTest"
          label="Theme test"
        />
        <Taskitem
          handleCloseTasks={handleCloseTasks}
          location="/TipCalc"
          label="Tip Calculator"
        />
        <Taskitem
          handleCloseTasks={handleCloseTasks}
          location="/To-do"
          label="To-Do"
        />{" "}
        <Taskitem
          handleCloseTasks={handleCloseTasks}
          location="/Registration"
          label="Registration form"
        />
      </Menu>
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
