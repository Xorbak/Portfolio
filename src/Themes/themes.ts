import { ThemeOptions } from "@mui/material/styles/createTheme";
import createTheme from "@mui/material/styles/createTheme";

export const defaultTheme = createTheme();

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const darkMode: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#7A7AFF",
      light: "rgb(85, 87, 110)",
      dark: "rgb(30, 32, 51)",
      contrastText: "#2b2e4a",
    },
    secondary: {
      main: "#14ffec",
      light: "rgb(14, 178, 165)",
      dark: "#0d7377",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#282c34",
      paper: "#2b2e4a",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0,0,0,0.79)",
    },
    error: {
      main: "#ff1100",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: "5px",
  },
};

export const cottonCandy: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#FCBAD3",
      light: "rgb(252, 199, 219)",
      dark: "rgb(176, 130, 147)",
      contrastText: "#rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#FFFFD2",
      light: "rgb(255, 255, 219)",
      dark: "rgb(178, 178, 147)",
      contrastText: "#rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#A8D8EA",
      paper: "#AA96DA",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      main: "#ff1100",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const morningCoffee: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#E5B299",
      light: "rgb(234, 193, 173)",
      dark: "rgb(160, 124, 107)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#FCDEC0",
      light: "rgb(252, 228, 204)",
      dark: "rgb(176, 155, 134)",
      contrastText: "#rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#7D5A50",
      paper: "#B4846C",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0,0,0,0.79)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: " #4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};
export const SeaSideEve: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00ADB5",
      light: "rgb(51, 189, 195)",
      dark: "rgb(0, 121, 126)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#EEEEEE",
      light: "rgb(241, 241, 241)",
      dark: "rgb(166, 166, 166)",
      contrastText: "#rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#222831",
      paper: "#393E46",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: " #4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const summer: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#F2DF3A",
      light: "rgb(244, 229, 97)",
      dark: "rgb(169, 156, 40)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#F6F6F6",
      light: "rgb(247, 247, 247)",
      dark: "rgb(172, 172, 172)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#0078AA",
      paper: "#3AB4F2",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0,0,0,0.79)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};
export const fall: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#DD4A48",
      light: "rgb(227, 110, 108)",
      dark: "rgb(154, 51, 50)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ECB390",
      light: "rgb(239, 194, 166)",
      dark: "rgb(165, 125, 100)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#C0D8C0",
      paper: "#F5EEDC",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0,0,0,0.79)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const winter: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#7DEDFF",
      light: "rgb(151, 240, 255)",
      dark: "rgb(87, 165, 178)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#88FFF7",
      light: "rgb(159, 255, 248)",
      dark: "rgb(95, 178, 172)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#7C83FD",
      paper: "#96BAFF",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(70,63,63,0.5)",
      primary: "rgba(0,0,0,0.79)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const spring: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#91C788",
      light: "rgb(167, 210, 159)",
      dark: "rgb(101, 139, 95)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#52734D",
      light: "rgb(116, 143, 112)",
      dark: "rgb(57, 80, 53)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#FEFFDE",
      paper: "#DDFFBC",
    },
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.08)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: "#4caf50" },
  },
  typography: {
    //@ts-ignore
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    subtitle1: {
      fontSize: "0.5rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
};
