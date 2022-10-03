import MenuItem from "@mui/material/MenuItem";
import { Theme } from "@mui/material/styles";
import React from "react";

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleCloseTheme: () => void;
  label: string;
  theme: Theme;
}
//used to set the theme
export const ThemeItem = ({
  setCurrentTheme,
  handleCloseTheme,
  label,
  theme,
}: Props) => {
  //closes dropdown on window resize > without it dropdowns act abnormally with resize
  window.onresize = handleCloseTheme;
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
