import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";

import { Button, CircularProgress } from "@mui/material";
import axios from "axios";

interface CartoonQuotes {
  name: string;
  quote: string;
  cartoon: string;
}
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartoonQuotes = ({ setModal }: Props) => {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const [quote, setQuote] = useState<CartoonQuotes[]>();
  const [quoteNumber, setQuoteNumber] = useState<number>(getRandomInt(50));
  const cartoonFetch = `${process.env.REACT_APP_CARTOON}`;
  const fetchCartoon = async () => {
    await fetch(`${process.env.REACT_APP_CARTOON}?limit=100`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        !quote && setQuote(result);
        setQuoteNumber(getRandomInt(result.length));
      });
  };
  const getQuotes = () => {
    const options = {
      method: "GET",
      url: "https://xorprod.herokuapp.com/quote",
    };
    axios.request(options).then((res) => {
      !quote && setQuote(res.data.documents);
      setQuoteNumber(getRandomInt(res.data.documents.length));
    });
  };
  useEffect(() => {
    !quote && getQuotes();
  }, []);

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
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "background.paper",
            minWidth: "100px",
            maxWidth: { xs: "90vw", sm: "300px" },
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
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <Box>
              <Typography variant="h5">
                {quote && quote[quoteNumber].quote}
              </Typography>
              <Typography variant="caption">
                -{quote && quote[quoteNumber].name} *
                {quote && quote[quoteNumber].cartoon}
              </Typography>
            </Box>
          )}
        </Box>

        <Button
          onClick={() => {
            setQuoteNumber(getRandomInt(!quote ? 50 : quote.length));
          }}
        >
          Change quote
        </Button>
        <Button onClick={() => setModal(false)}>Add a new quote</Button>
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
    justifyContent: { xs: "center", md: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
