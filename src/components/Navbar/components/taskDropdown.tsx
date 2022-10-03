import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Taskitem } from "./taskItem";

interface Props {
  handleCloseNavMenu: () => void;
}
//@ts-ignore
export const TaskDropdown = ({ handleCloseNavMenu }: Props) => {
  //handels the opening and closing of the dropdown

  const [anchorElTasks, setAnchorElTasks] = useState<null | HTMLElement>(null);
  const openTasks = Boolean(anchorElTasks);
  const handleClickTasks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTasks(event.currentTarget);
  };
  const handleCloseTasks: () => any = () => {
    setAnchorElTasks(null);
  };

  interface taskArray {
    location: string;
    label: string;
  }
  const tasks: taskArray[] = [
    { location: "/ThemeTest", label: "Theme test" },
    { location: "/TipCalc", label: "Tip Calculator" },
    { location: "/To-do", label: "To do list" },
    { location: "/Registration", label: "Registration form" },
    { location: "/Pipeline", label: "Pipeline" },
    { location: "/Playground", label: "Playground" },
    { location: "/WeatherForcast", label: "Weather Forcast" },
  ];
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
        onClose={() => {
          //Closes the dropdown when on mobile screens when an Item is chosen
          handleCloseTasks(), handleCloseNavMenu();
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ color: "text.primary" }}
      >
        {tasks.map(({ location, label }) => (
          <Taskitem
            key={label}
            handleCloseTasks={() => {
              handleCloseTasks(), handleCloseNavMenu();
            }}
            location={location}
            label={label}
          />
        ))}
      </Menu>
    </Typography>
  );
};

const styles = {
  NavbarItem: {
    color: "text.primary",
    transition: "top 5s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      color: "primary.main",
      top: "+2px",
    },
  },
};
