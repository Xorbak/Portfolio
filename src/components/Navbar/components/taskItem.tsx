import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  handleCloseTasks: () => void;
  location: string;
  label: string;
}
export const Taskitem = ({ handleCloseTasks, location, label }: Props) => {
  return (
    <NavLink
      to={location}
      style={{
        textDecoration: "none",
      }}
    >
      <MenuItem onClick={handleCloseTasks} sx={{ color: "text.primary" }}>
        {label}
      </MenuItem>
    </NavLink>
  );
};
