import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { ThemeTester } from "./components/ThemeTest/Themetester";
import { SeaSideEve } from "./Themes/themes";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { ResponsiveAppBar } from "./components/Navbar/responsiveNavBar";
import { ToDo } from "./components/ToDo/ToDo";
import { TipCalc } from "./components/Tip Calculator/TipCalc";
import { RegistrationForm } from "./components/Registration/RegistrationForm";
import { ThemeOptions } from "@mui/system";
import { Pipeline } from "./components/Pipeline/Pipeline";
import { Playground } from "./components/playground/Playground";
import { WeatherForcast } from "./components/Weatherforcast/Weatherforcast";
export interface Geolocation {
  longitude: number;
  latitude: number;
}

export interface CurrentWeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [{ description: string; icon: string; main: string }];
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}
interface City {
  name: string;
}
export interface AllWeatherData {
  navbarWeather: CurrentWeatherData;
  search: CurrentWeatherData;
}

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(SeaSideEve);
  //--------------Weather states
  const [geolocation, setGeolocation] = useState<Geolocation>();
  const [weatherData, setWeatherData] = useState<AllWeatherData>();
  const apiKey = "0d004acbd263f70a7810a4c700aff384";
  return (
    <Box>
      <ThemeProvider theme={currentTheme}>
        <ResponsiveAppBar
          setCurrentTheme={setCurrentTheme} // this is to change the theme with a click of a button
          geolocation={geolocation}
          weatherData={weatherData}
          setGeolocation={setGeolocation}
          setWeatherData={setWeatherData}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/To-do" element={<ToDo />} />
          <Route path="/Registration" element={<RegistrationForm />} />
          <Route path="/ThemeTest" element={<ThemeTester />} />
          <Route path="/TipCalc" element={<TipCalc />}></Route>
          <Route path="/Pipeline" element={<Pipeline />} />
          <Route path="/Playground" element={<Playground />} />
          <Route
            path="/WeatherForcast"
            element={
              <WeatherForcast
                geolocation={geolocation}
                weatherData={weatherData}
                setGeolocation={setGeolocation}
                setWeatherData={setWeatherData}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
