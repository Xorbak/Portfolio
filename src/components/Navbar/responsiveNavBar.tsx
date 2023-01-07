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
import { Theme } from "@mui/material/styles";
import { AllWeatherData, Geolocation } from "../../App";
import { useEffect } from "react";
import { Projects } from "./components/Projects";

//Refactor, works but its messy

interface Props {
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setGeolocation: React.Dispatch<React.SetStateAction<Geolocation | undefined>>;
  setWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;
  geolocation: Geolocation | undefined;
  weatherData: AllWeatherData | undefined;
}

export const ResponsiveAppBar = ({
  setCurrentTheme,
  setGeolocation,
  setWeatherData,
  geolocation,
  weatherData,
}: Props) => {
  //--------------------weather forcast
  const apiKey: string = "0d004acbd263f70a7810a4c700aff384";
  const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&appid=${apiKey}`;
  const imgUrl: string = `http://openweathermap.org/img/wn/${weatherData &&
    weatherData.navbarWeather.weather[0].icon}.png`;
  //-------------------------------------------------- fetch API
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
            setWeatherData({
              navbarWeather: result, //-----------------cant get the spread to work
              search: !weatherData ? result : weatherData.search,
            });
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

  const handleCloseNavMenu: () => void = () => {
    setAnchorElNav(null);
  };
  //---------------------------
  const pages = [
    <HomeButton handleCloseNavMenu={handleCloseNavMenu} />,
    <TaskDropdown handleCloseNavMenu={handleCloseNavMenu} />,
    <ThemeDropDown
      handleCloseNavMenu={handleCloseNavMenu}
      setCurrentTheme={setCurrentTheme}
    />,
    <Projects handleCloseNavMenu={handleCloseNavMenu} />,
  ];
  //---------------------------

  return (
    <AppBar position="sticky">
      <Container sx={styles.navbar} maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            //--------------------------------mobile size menu
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{ display: "flex" }}
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
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={pages.indexOf(page)}>
                  <Box textAlign="center">{page}</Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            //------------------larger screen navbar
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              paddingLeft: "100px",
            }}
          >
            {pages.map((page) => (
              <Box
                key={pages.indexOf(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Box>
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
                  {Math.round(weatherData.navbarWeather.main.feels_like)}°C
                </Typography>
                <Typography variant="caption">
                  {Math.round(weatherData.navbarWeather.main.temp_max)}°C/
                  {Math.round(weatherData.navbarWeather.main.temp_min)}°C
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
