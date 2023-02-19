import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { AiInput } from "../AiImage/AiInput";
import { Button } from "@mui/material";
import axios from "axios";

export const AiChat = () => {
  const [chat, setChatresult] = useState<string>("");
  const [errorCode, setErrorCode] = useState<string>();
  const [question, setQuestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [typewriter, setTypewriter] = useState<string>("");

  const getChat = (prompt: string, input: string) => {
    const options = {
      method: "GET",
      url: `https://xorprod.herokuapp.com/${input}`,
      params: { input: prompt },
    };
    axios
      .request(options)
      .then((res) => {
        const json = JSON.stringify(res.data);
        let finalJson = JSON.parse(json);

        setChatresult(
          finalJson.text.charAt(0) === "?"
            ? finalJson.text.slice(0, 0)
            : finalJson.text
        );
      })

      .catch((e) => setErrorCode(e.response));
  };
  let i = 0;
  let j: string = "";
  const run = () => {
    setTypewriter(j);
  };
  const loop = () => {
    if (i < chat.length) {
      j = j + chat[i];
      run();
      console.log(typewriter);
      i++;
    }
    setTimeout(loop, 50);
  };

  useEffect(() => {
    chat.length != 0 ? loop() : null;
  }, [chat]);

  console.log(typewriter);
  return (
    <Grid item container flexDirection={"column"} sx={styles.App}>
      <Formik
        initialValues={{ prompt: "" }}
        onSubmit={(values, { resetForm }) => {
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
                <Button onClick={() => setChatresult("")} type="submit">
                  Go!
                </Button>
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
          <Grid container item flexDirection={"row"}>
            <Typography
              variant="h6"
              sx={{
                whiteSpace: "pre-wrap",
                padding: "10px",
                textDecoration: "underline",
              }}
            >
              Question:
            </Typography>
            <Typography
              sx={{
                whiteSpace: "pre-wrap",
                paddingY: "10px",
              }}
              variant="h6"
            >
              {`${question}`}
            </Typography>
          </Grid>
        )}
        {loading && !chat && (
          <Typography sx={{ whiteSpace: "pre-wrap", padding: "10px" }}>
            Loading...
          </Typography>
        )}
        {chat && (
          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              padding: "10px",
              overflow: "hidden",
              animation: "typing 3.5s steps(40,end)",
            }}
          >
            {typewriter}
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
