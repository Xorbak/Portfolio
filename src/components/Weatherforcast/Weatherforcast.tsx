import { Icon, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

import { WeatherSearch } from "./components/weatherSearch";
import { AllWeatherData, CurrentWeatherData, Geolocation } from "../../App";

interface Props {
  setGeolocation: React.Dispatch<React.SetStateAction<Geolocation | undefined>>;
  setWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;
  geolocation: Geolocation | undefined;
  weatherData: AllWeatherData | undefined;
}
export const WeatherForcast = ({
  setGeolocation,
  setWeatherData,
  geolocation,
  weatherData,
}: Props) => {
  const apiKey = "0d004acbd263f70a7810a4c700aff384";
  //------ reverse geocoding url << not working too well
  const cityApiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&limit=5&appid=0d004acbd263f70a7810a4c700aff384`;
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&appid=${apiKey}`;
  //--------------------------------------------
  const imgUrl = `http://openweathermap.org/img/wn/${weatherData &&
    weatherData.search.weather[0].icon}.png`;

  return (
    <Box sx={styles.App}>
      <Box sx={styles.weatherbox}>
        <WeatherSearch
          geolocation={geolocation}
          weatherData={weatherData}
          setGeolocation={setGeolocation}
          setWeatherData={setWeatherData}
        />
        {weatherData ? (
          <Box sx={styles.weatherbox}>
            <Typography sx={{ marginBottom: "10px" }} variant="h5">
              {weatherData.search.name}
            </Typography>
            <Typography variant="body1">
              Feels like: {Math.round(weatherData.search.main.feels_like)}°C
            </Typography>
            <Typography variant="caption">
              Max: {Math.round(weatherData.search.main.temp_max)}°C
            </Typography>
            <Typography variant="caption">
              Min: {Math.round(weatherData.search.main.temp_min)}°C
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                minHeight: "30px",
                minWidth: "25px",
              }}
            >
              <Typography variant="body1">
                Weather : {weatherData.search.weather[0].main}
              </Typography>

              <img src={imgUrl} height={25} width={25} />
            </Box>
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { sm: "start", md: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
  weatherbox: {
    backgroundColor: "background.paper",
    minWidth: "150px",
    minHeight: "100px",
    borderRadius: "5px",
    padding: "1%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
};
