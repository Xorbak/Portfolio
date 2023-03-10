import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import { Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { AiInput } from "./AiInput";
import { imageValidation } from "./validation";

import axios from "axios";

export const AiImage = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [imageResult, setImageResult] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<undefined | string>();
  const config = new Configuration({ apiKey: process.env.REACT_APP_OPEN }); //used to get the API from the .env
  const openAi = new OpenAIApi(config); //setting up the new instance of OpenAIApi

  const getImage = (prompt: string, input: string) => {
    const options = {
      method: "GET",
      url: `https://xorprod.herokuapp.com/ai/${input}`,
      params: { input: prompt },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res.data.data[0].url);
        setImageResult(res.data.data[0].url ? res.data.data[0].url : "");
      })
      .catch((e) => setErrorCode(e.response));
  };

  return (
    <Grid sx={styles.App}>
      <Grid
        container
        item
        xs={12}
        md={6}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Formik
          initialValues={{ prompt: "", loading: false }}
          onSubmit={(values, { resetForm }) => {
            setLoading(true), getImage(values.prompt, "image");
            setSearchInput(values.prompt), resetForm();
          }}
          validationSchema={imageValidation}
        >
          {({ values, errors, touched }) => {
            return (
              <Form>
                <Grid
                  item
                  container
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Field
                    placeholder="What do you want to see?"
                    name="prompt"
                    validation={errors.prompt}
                    component={AiInput}
                  />
                  <Typography color="error" variant="caption">
                    {submitted && errors.prompt}
                  </Typography>
                  <Button
                    type="submit"
                    onClick={() => {
                      setSubmitted(true);
                      setImageResult("");
                      setSearchInput("");
                    }}
                    sx={{ width: "30%" }}
                  >
                    GO!
                  </Button>
                </Grid>
              </Form>
            );
          }}
        </Formik>
        {loading == true ? (
          imageResult && imageResult.length > 0 ? (
            <React.Fragment>
              <Typography
                sx={{ marginY: "5px", marginX: { xs: "10px", md: 0 } }}
              >
                {searchInput}
              </Typography>{" "}
              <Grid
                item
                container
                component="img"
                sx={{ width: { xs: "95vw", md: "300px" } }}
                src={imageResult && imageResult}
              />
            </React.Fragment>
          ) : errorCode == undefined ? (
            <Typography>Loading...</Typography>
          ) : (
            <Typography sx={{ color: "error.main" }}>{errorCode}</Typography>
          )
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

const styles = {
  App: {
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "start", sm: "center" },
    paddingTop: { xs: "10%", sm: "0%" },
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
};
