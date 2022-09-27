import { Icon, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

interface Geolocation {
  longitude: number;
  latitude: number;
}

interface CurrentWeatherData {
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

interface Props {
  setGeolocation: React.Dispatch<React.SetStateAction<Geolocation | undefined>>;
  setWeatherData: React.Dispatch<
    React.SetStateAction<CurrentWeatherData | undefined>
  >;
  geolocation: Geolocation | undefined;
  weatherData: CurrentWeatherData | undefined;
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

  return (
    <Box sx={styles.App}>
      {weatherData !== undefined ? (
        <Box sx={styles.weatherbox}>
          <Typography sx={{ marginBottom: "10px" }} variant="h5">
            {" "}
            {weatherData.name}
          </Typography>
          <Typography variant="body1">
            Feels like: {Math.round(weatherData.main.feels_like)}°C
          </Typography>
          <Typography variant="caption">
            Max: {Math.round(weatherData.main.temp_max)}°C
          </Typography>
          <Typography variant="caption">
            Min: {Math.round(weatherData.main.temp_min)}°C
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
              Weather : {weatherData.weather[0].main}
            </Typography>

            <img src={imgUrl} height={25} width={25} />
          </Box>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
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
