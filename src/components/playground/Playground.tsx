import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

interface CartoonQuotes {
  name: string;
  quote: string;
  cartoon: string;
}
export const Playground = () => {
  const [quote, setQuote] = useState<CartoonQuotes>();
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const fetchCartoon = async () => {
    await fetch("https://krat.es/6685b8328aa899faddec/cartoonQuotes?limit=100")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setQuote(result[getRandomInt(result.length)]);
      });
  };
  useEffect(() => {
    !quote && fetchCartoon();
  }, []);

  //"api-key":"KevlS7u5BhBodDotk49xIc8FZxprXLw4FiRZMkq7guPmIRDMJSWl1mwmAIRoRPiQ",
  return (
    <Box sx={styles.App}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          boxShadow={5}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "background.paper",
            minWidth: "100px",
            maxWidth: "300px",
            minHeight: "100px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {!quote ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                alignContent: "center",
              }}
            >
              <CircularProgress
                sx={{ justifySelf: "center" }}
                color="primary"
              />
            </Box>
          ) : (
            <Box>
              <Typography variant="h5">{quote && quote.quote}</Typography>
              <Typography variant="caption">
                -{quote && quote.name} *{quote && quote.cartoon}
              </Typography>
            </Box>
          )}
        </Box>

        <Button
          onClick={() => {
            fetchCartoon();
          }}
        >
          Change quote
        </Button>
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
};
