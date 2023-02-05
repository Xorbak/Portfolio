import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

export const AiImage = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageResult, setImageResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const config = new Configuration({ apiKey: process.env.REACT_APP_OPEN }); //used to get the API from the .env
  const openAi = new OpenAIApi(config); //setting up the new instance of OpenAIApi
  const generateImage = async () => {
    const res = await openAi.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    setImageResult(res.data.data[0].url ? res.data.data[0].url : "");
    setLoading(true);
  };

  return (
    <Grid sx={styles.App}>
      <Grid
        container
        item
        xs={6}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <TextField
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What do you want to see?"
          size="small"
          autoComplete="off"
        />

        <Button onClick={generateImage} sx={{ width: "30%" }}>
          GO!
        </Button>

        {loading && imageResult.length > 0 ? (
          <React.Fragment>
            <Typography sx={{ marginY: "5px" }}>{prompt}</Typography>{" "}
            <Grid
              item
              container
              component="img"
              sx={{ width: "300px" }}
              src={imageResult}
            />
          </React.Fragment>
        ) : (
          <Typography>Loading...</Typography>
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
