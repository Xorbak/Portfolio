import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import { WeatherSearch } from "./components/weatherSearch";
import { AllWeatherData } from "../../App";

interface Props {
  setWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;
  weatherData: AllWeatherData | undefined;
}
export const WeatherForcast = ({ setWeatherData, weatherData }: Props) => {
  const imgUrl: string = `http://openweathermap.org/img/wn/${weatherData &&
    weatherData.search.weather[0].icon}.png`;

  return (
    <Box sx={styles.App}>
      <Box boxShadow={5} sx={styles.weatherbox}>
        <WeatherSearch
          weatherData={weatherData}
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
