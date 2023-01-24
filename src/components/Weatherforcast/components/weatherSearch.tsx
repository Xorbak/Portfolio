import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AllWeatherData } from "../../../App";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { WeatherSearchBox } from "./weatherSearchBox";
interface Props {
  setWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;

  weatherData: AllWeatherData | undefined;
}

export const WeatherSearch = ({ setWeatherData, weatherData }: Props) => {
  const apiKey: string = "0d004acbd263f70a7810a4c700aff384";
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  return (
    <Formik
      initialValues={{ input: "" }}
      onSubmit={(values, { resetForm }) => {
        setError(false);

        const cityApi: string = `https://api.openweathermap.org/geo/1.0/direct?q=${values.input}&limit=1&appid=${process.env.REACT_APP_WEATHER}`;

        const fetchCoordinates = async () => {
          await fetch(cityApi) //get the city to get longitude and latitude
            .then((res) => res.json())
            .then(async (result) => {
              const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${result[0].lat}&lon=${result[0].lon}&appid=${process.env.REACT_APP_WEATHER}`;
              await fetch(weatherApiUrl) // use that to get location.
                .then((res) => res.json())
                .then((result) => {
                  setWeatherData({
                    search: result,
                    navbarWeather: weatherData
                      ? weatherData.navbarWeather
                      : result,
                  });
                  console.log(result);
                });
            })
            .catch(() => (setError(true), setInput(values.input)));
        };
        fetchCoordinates();
        resetForm();
      }}
    >
      {() => {
        return (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Field name="input" component={WeatherSearchBox} />
              <Typography
                variant="caption"
                sx={{ color: "error.main", paddingLeft: "10px" }}
              >
                {error && `${input} is not a valid city`}
              </Typography>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
