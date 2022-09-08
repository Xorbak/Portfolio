import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeOptions } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
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
} from "../../../Themes/themes";
import { ThemeItem } from "./themeItem";

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeOptions>>;
}

export const ThemeDropDown = ({ setCurrentTheme }: Props) => {
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

  return (
    <Typography variant="h6" sx={styles.NavbarItem}>
      <Button
        id="basic-button"
        aria-controls={openTheme ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openTheme ? "true" : undefined}
        onClick={handleClickTheme}
        size="large"
        sx={styles.NavbarItem}
      >
        <Box>Themes</Box>
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
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Default"
          theme={defaultTheme}
        />
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Sea Side Evening"
          theme={SeaSideEve}
        />
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Cotton Candy"
          theme={cottonCandy}
        />
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Morning Coffee"
          theme={morningCoffee}
        />{" "}
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Dark mode"
          theme={darkMode}
        />
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Summer"
          theme={summer}
        />{" "}
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Fall"
          theme={fall}
        />
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Winter"
          theme={winter}
        />{" "}
        <ThemeItem
          setCurrentTheme={setCurrentTheme}
          handleCloseTheme={handleCloseTheme}
          label="Spring"
          theme={spring}
        />
      </Menu>
    </Typography>
  );
};

const styles = {
  NavbarItem: {
    color: "text.primary",
    transision: "10000000ms",
    "&:hover": {
      backgroundColor: "transparent",
      color: "primary.main",
      top: "+2px",
      transision: "10000000ms",
    },
  },
};
