import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { TaskDropdown } from "./components/taskDropdown";
import { HomeButton } from "./components/homeButton";
import { ThemeDropDown } from "./components/themeDropdown";
import { Theme, ThemeOptions } from "@mui/material/styles";
import { CurrentWeatherData, Geolocation } from "../../App";
import { useEffect } from "react";

//Refactor, works but its messy
const pages = ["Home", "Tasks", "Blog"];
//const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setGeolocation: React.Dispatch<React.SetStateAction<Geolocation | undefined>>;
  setWeatherData: React.Dispatch<
    React.SetStateAction<CurrentWeatherData | undefined>
  >;
  geolocation: Geolocation | undefined;
  weatherData: CurrentWeatherData | undefined;
}

export const ResponsiveAppBar = ({
  setCurrentTheme,
  setGeolocation,
  setWeatherData,
  geolocation,
  weatherData,
}: Props) => {
  //--------------------weather forcast
  const apiKey = "0d004acbd263f70a7810a4c700aff384";
  //------ reverse geocoding url << not working too well

  const cityApiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&limit=5&appid=0d004acbd263f70a7810a4c700aff384`;

  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} <<<< API call using city name instead of lon lat
  //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key} <<<<<< API call using lon lat

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&appid=${apiKey}`;
  //--------------------------------------------
  const imgUrl = `http://openweathermap.org/img/wn/${weatherData &&
    weatherData.weather[0].icon}.png`;
  //--------------------------------------------------
  useEffect(() => {
    const fetchCity = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
      console.log(geolocation);
      geolocation &&
        (await fetch(weatherApiUrl)
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
          }));
    };

    fetchCity();
  }, [
    geolocation && geolocation.longitude,
    geolocation && geolocation.latitude,
  ]);

  //Handles opening and closing of dropdowns
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuItem = (i: any) => {
    let component;
    switch (i) {
      case "Home":
        component = <HomeButton handleCloseNavMenu={handleCloseNavMenu} />;
        break;
      case "Tasks":
        component = <TaskDropdown handleCloseNavMenu={handleCloseNavMenu} />;
        break;
      default:
        //default will always be the last item to be rendered
        component = (
          <ThemeDropDown
            handleCloseNavMenu={handleCloseNavMenu}
            setCurrentTheme={setCurrentTheme}
          />
        );
    }
    return component;
  };

  return (
    <AppBar position="sticky">
      <Container sx={styles.navbar} maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            //--------------------------------mobile size menu
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{menuItem(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            //------------------mobile and up navbar
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {//instead of rendering components one by one here. It maps through the array and the switch-case decides what to render
            pages.map((page) => (
              <Typography
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menuItem(page)}
              </Typography>
            ))}
          </Box>
          {weatherData && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",

                alignItems: "center",
              }}
            >
              <Box>
                <img src={imgUrl} height={50} width={50} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1">
                  {Math.round(weatherData.main.feels_like)}°C
                </Typography>
                <Typography variant="caption">
                  {Math.round(weatherData.main.temp_max)}°C/
                  {Math.round(weatherData.main.temp_min)}°C
                </Typography>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  navbar: { backgroundColor: "background.default" },
};
