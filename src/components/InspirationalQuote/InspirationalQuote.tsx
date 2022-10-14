import { SensorWindow } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";
import { InspirationButton } from "./components/inspirationButton";
import { InspireMe } from "./components/inspireMe";
import { QuoteError } from "./components/quoteError";
import { QuoteMessage } from "./components/quoteMessage";
export interface Quotes {
  anime: string;
  character: string;
  quote: string;
}

export interface QuoteVisibility {
  box: boolean;
  error: boolean;
}
export const InspirationalQuote = () => {
  const [window, setWindow] = useState<QuoteVisibility>({
    box: true,
    error: false,
  });
  const [quote, setQuote] = useState<Quotes | null>();
  const quoteAPI: string = "https://animechan.vercel.app/api/random";

  const getQuote = async (url: string) => {
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setQuote(result);
      })
      .catch(() => {
        setWindow((i) => ({ ...i, error: true }));
      });
  };

  return (
    <Box sx={styles.App}>
      {window.box ? (
        <Box>
          <InspireMe // click button to get inspiration
            getQuote={getQuote}
            quoteAPI={quoteAPI}
            setQuote={setQuote}
            setWindow={setWindow}
          />
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
              <QuoteError
                quoteState={quote}
                quote={quote && quote.quote}
                character={quote && quote.character}
                anime={quote && quote.anime}
              />
            ) : quote ? (
              <QuoteMessage
                quote={quote && quote.quote}
                character={quote && quote.character}
                anime={quote && quote.anime}
              />
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
