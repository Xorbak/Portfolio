import { ThemeOptions } from "@mui/material/styles/createTheme";
import createTheme from "@mui/material/styles/createTheme";

const darkModeValues: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#7A7AFF",
      light: "rgb(85, 87, 110)",
      dark: "rgb(34 38 78)",
      contrastText: "#fff",
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
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    error: {
      main: "#ff1100",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: "5px",
  },
};

const cottonCandyValues: ThemeOptions = {
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
      main: "#990A00",
    },
    success: { main: "#165816" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};

const morningCoffeeValues: ThemeOptions = {
  palette: {
    mode: "light",
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
      main: "#841010",
    },
    success: { main: "#A8FFAB" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const SeaSideEveValues: ThemeOptions = {
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
    success: { main: "#4caf50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const GrapeSodaValues: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#916bbf",
      light: "rgb(167, 136, 203)",
      dark: "rgb(101, 74, 133)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#c996cc",
      light: "rgb(211, 171, 214)",
      dark: "rgb(140, 105, 142)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#1c0c5b",
      paper: "#3d2c8D",
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

    error: {
      main: "#f44336",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const GranpaGrapeValues: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#787a91",
      light: "rgb(147, 148, 167)",
      dark: "rgb(84, 85, 101)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#eeeeee",
      light: "rgb(241, 241, 241)",
      dark: "rgb(166, 166, 166)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#0f044c",
      paper: "#141E61",
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

    error: {
      main: "#f44336",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const BumbleBeeValues: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffd369",
      light: "rgb(255, 219, 135)",
      dark: "rgb(178, 147, 73)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#eeeeee",
      light: "rgb(241, 241, 241)",
      dark: "rgb(166, 166, 166)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#222831",
      paper: "#393e46",
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

    error: {
      main: "#f44336",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const CorporateGreyValues: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#a5c9ca",
      light: "rgb(183, 211, 212)",
      dark: "rgb(115, 140, 141)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e7f6f2",
      light: "rgb(235, 247, 244)",
      dark: "rgb(161, 172, 169)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#2c3333",
      paper: "#395b64",
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

    error: {
      main: "#f44336",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const summerValues: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#CC9C75",
      light: "rgb(214, 175, 144)",
      dark: "rgb(142, 109, 81)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#D5D8B5",
      light: "rgb(221, 223, 195)",
      dark: "rgb(149, 151, 126)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      100: "#f5f5f5",
      900: "#212121",
    },
    background: {
      default: "#809A6F",
      paper: "#A25B5B",
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
      main: "#FFA3A3",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
const fallValues: ThemeOptions = {
  palette: {
    mode: "light",
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
      primary: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      main: "#f44336",
    },
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};

const winterValues: ThemeOptions = {
  palette: {
    mode: "light",
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

    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};

const springValues: ThemeOptions = {
  palette: {
    mode: "light",
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
    success: { main: "#4CAF50" },
  },
  typography: { htmlFontSize: 20 },
  shape: {
    borderRadius: 4,
  },
};
export const defaultTheme = createTheme();
export const darkMode = createTheme(darkModeValues);
export const cottonCandy = createTheme(cottonCandyValues);
export const morningCoffee = createTheme(morningCoffeeValues);
export const SeaSideEve = createTheme(SeaSideEveValues);
export const GrapeSoda = createTheme(GrapeSodaValues);
export const GrandpaGrape = createTheme(GranpaGrapeValues);
export const BumbleBee = createTheme(BumbleBeeValues);
export const CorporateGrey = createTheme(CorporateGreyValues);
export const summer = createTheme(summerValues);
export const fall = createTheme(fallValues);
export const winter = createTheme(winterValues);
export const spring = createTheme(springValues);
