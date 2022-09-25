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
export const WeatherForcast = () => {
  const [geolocation, setGeolocation] = useState<Geolocation>();
  const [weatherData, setWeatherData] = useState<CurrentWeatherData>();

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geolocation &&
    geolocation.latitude}&lon=${geolocation &&
    geolocation.longitude}&appid=0d004acbd263f70a7810a4c700aff384`;
  const imgUrl = `http://openweathermap.org/img/wn/${weatherData &&
    weatherData.weather[0].icon}.png`;
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });

      geolocation &&
        (await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
          }));
    };
    fetchData();
  }, [
    geolocation && geolocation.longitude,
    geolocation && geolocation.latitude,
  ]);

  console.log(geolocation);
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
