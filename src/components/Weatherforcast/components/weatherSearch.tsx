import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { MyInput } from "../../ToDo/components/MyInput";
import { AllWeatherData, CurrentWeatherData, Geolocation } from "../../../App";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { WeatherSearchBox } from "./weatherSearchBox";
interface Props {
  setGeolocation: React.Dispatch<React.SetStateAction<Geolocation | undefined>>;
  setWeatherData: React.Dispatch<
    React.SetStateAction<AllWeatherData | undefined>
  >;
  geolocation: Geolocation | undefined;
  weatherData: AllWeatherData | undefined;
}

interface Coordinates {
  lon: number;
  lat: number;
}
export const WeatherSearch = ({
  setGeolocation,
  setWeatherData,
  geolocation,
  weatherData,
}: Props) => {
  const apiKey = "0d004acbd263f70a7810a4c700aff384";
  const [error, setError] = useState(false);
  const [input, setInput] = useState<string>();
  return (
    <Formik
      initialValues={{ input: "" }}
      onSubmit={(values, { resetForm }) => {
        setError(false);

        const cityApi = `http://api.openweathermap.org/geo/1.0/direct?q=${values.input}&limit=5&appid=${apiKey}`;

        const fetchCoordinates = async () => {
          await fetch(cityApi)
            .then((res) => res.json())
            .then(async (result) => {
              const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${result[0].lat}&lon=${result[0].lon}&appid=${apiKey}`;
              await fetch(weatherApiUrl)
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
      {({ values }) => {
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
