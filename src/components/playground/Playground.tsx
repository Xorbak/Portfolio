import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

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
    await fetch("https://krat.es/8681e82ae86318a999b9/inspQuote")
      .then((res) => res.json())
      .then((result) => {
        console.log(result[getRandomInt(4)]);
        setQuote(result[getRandomInt(4)]);
      });
  };
  useEffect(() => {
    fetchCartoon();
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
        <Typography variant="h5">{quote && quote.quote}</Typography>
        <Typography variant="caption">
          -{quote && quote.name} *{quote && quote.cartoon}
        </Typography>
        <Button
          onClick={() => {
            fetchCartoon();
          }}
        >
          {" "}
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
