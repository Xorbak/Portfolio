import { SensorWindow } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";
interface Quotes {
  anime: string;
  character: string;
  quote: string;
}
export const InspirationalQuote = () => {
  const [inspiration, setInspiration] = useState(6);
  const [window, setWindow] = useState({ box: true, error: false });
  const [quote, setQuote] = useState<Quotes | null>();
  const quoteAPI = "https://animechan.vercel.app/api/random";

  const getQuote = async (url: string) => {
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setQuote(result);
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
        setWindow((i) => ({ ...i, error: true }));
      });
  };

  return (
    <Box sx={styles.App}>
      {window.box ? (
        <Box>
          <Typography //@ts-ignore
            variant={`h${inspiration}`}
          >
            {inspiration == 1
              ? "YOU'VE REACHED MAX LEVEL OF INSPIRATION CALMDOWN"
              : "INSPIRATION"}
          </Typography>
          {inspiration == 1 ? (
            <Button
              onClick={() => {
                setInspiration(6);
              }}
            >
              calm me down please
            </Button>
          ) : (
            <Button
              onClick={() => {
                setInspiration(inspiration - 1);
              }}
            >
              inspire me
            </Button>
          )}
          <Button
            onClick={() => {
              setQuote(null),
                setWindow((i) => ({ ...i, box: false })),
                getQuote(quoteAPI);
            }}
          >
            Show me a quote
          </Button>
        </Box>
      ) : (
        <Box>
          <Box
            boxShadow={5}
            sx={{
              backgroundColor: "background.paper",
              minWidth: "100px",
              maxWidth: "300px",
              minHeight: "100px",
              display: "flex",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {window.error ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">
                  {quote ? quote.quote : "something went wrong"}
                </Typography>
                <Typography variant="caption">
                  -{quote ? quote.character : "Unkown"} *
                  {quote ? quote.anime : "Life"}
                </Typography>
              </Box>
            ) : quote ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">{quote && quote.quote}</Typography>
                <Typography variant="caption">
                  -{quote && quote.character} *{quote && quote.anime}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  width: "100%",
                }}
              >
                <CircularProgress color="primary" />
              </Typography>
            )}
          </Box>
          <Button onClick={() => setWindow((i) => ({ ...i, box: true }))}>
            inspire
          </Button>
          <Button
            onClick={() => {
              getQuote(quoteAPI),
                setQuote(null),
                setWindow((i) => ({ ...i, error: false }));
            }}
          >
            Get another qoute
          </Button>
        </Box>
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
};
