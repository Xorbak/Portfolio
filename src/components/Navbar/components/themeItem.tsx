import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Theme, ThemeOptions } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
  handleCloseTheme: () => void;
  label: string;
  theme: Theme | ThemeOptions;
}

export const ThemeItem = ({
  setCurrentTheme,
  handleCloseTheme,
  label,
  theme,
}: Props) => {
  return (
    <MenuItem
      onClick={() => {
        setCurrentTheme(theme);
        handleCloseTheme;
      }}
    >
      {label}
    </MenuItem>
  );
};
