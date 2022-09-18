import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Theme, ThemeOptions } from "@mui/material/styles";
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
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleCloseNavMenu: () => void;
}
interface themesArray {
  label: string;
  theme: Theme;
}

export const ThemeDropDown = ({
  setCurrentTheme,
  handleCloseNavMenu,
}: Props) => {
  //handels the closing of the dropdowns
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
  const themes: themesArray[] = [
    { label: "Default", theme: defaultTheme },
    { label: "Sea Side Evening", theme: SeaSideEve },
    { label: "Cotton Candy", theme: cottonCandy },
    { label: "Morning Coffee", theme: morningCoffee },
    { label: "Dark mode", theme: darkMode },
    { label: "Summer", theme: summer },
    { label: "Fall", theme: fall },
    { label: "Winter", theme: winter },
    { label: "Spring", theme: spring },
  ];
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
        onClose={() => {
          //closes the dropdown and menu when the screen is on mobile sizes
          handleCloseTheme(), handleCloseNavMenu();
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {themes.map(({ label, theme }) => (
          <ThemeItem
            key={label}
            setCurrentTheme={setCurrentTheme}
            handleCloseTheme={() => {
              handleCloseTheme(), handleCloseNavMenu();
            }}
            label={label}
            theme={theme}
          />
        ))}
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
