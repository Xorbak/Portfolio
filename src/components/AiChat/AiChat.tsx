import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { AiInput } from "../AiImage/AiInput";
import { Button } from "@mui/material";
import axios from "axios";
import jsontest from "./jsontest.json";
import { stringify } from "querystring";

export const AiChat = () => {
  const [chat, setChatresult] = useState<string>();
  const [errorCode, setErrorCode] = useState<string>();
  const [question, setQuestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const getChat = (prompt: string, input: string) => {
    const options = {
      method: "GET",
      url: `http://localhost:5000/${input}`,
      params: { input: prompt },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res);

        const json = JSON.stringify(res.data);
        let finalJson = JSON.parse(json);
        console.log(finalJson.text);

        setChatresult(
          finalJson.text.charAt(0) === "?"
            ? finalJson.text.slice(0, 0)
            : finalJson.text
        );
      })
      .catch((e) => setErrorCode(e.response));
  };
  return (
    <Grid item container flexDirection={"column"} sx={styles.App}>
      <Formik
        initialValues={{ prompt: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values.prompt);
          getChat(values.prompt, "chat");
          setQuestion(values.prompt);
          setLoading(true);
        }}
      >
        {() => {
          return (
            <Form>
              {" "}
              <Grid
                item
                container
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Field
                  name="prompt"
                  placeholder="What do you want to know?"
                  component={AiInput}
                />
                <Button type="submit">Go!</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <Grid
        item
        container
        flexDirection={"column"}
        boxShadow={5}
        sx={{ backgroundColor: "background.paper", borderRadius: "5px" }}
        xs={10}
        md={4}
      >
        {" "}
        {question && (
          <Typography
            variant="h6"
            sx={{
              whiteSpace: "pre-wrap",
              padding: "10px",
              textDecoration: "underline",
            }}
          >
            Question: {question}
          </Typography>
        )}
        {loading && !chat && (
          <Typography sx={{ whiteSpace: "pre-wrap", padding: "10px" }}>
            Loading...
          </Typography>
        )}
        {chat && (
          <Typography sx={{ whiteSpace: "pre-wrap", padding: "10px" }}>
            {chat ? chat : loading ? "Loading..." : null}
          </Typography>
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
