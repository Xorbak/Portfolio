import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Quotes } from "../InspirationalQuote";

interface Props {
  quoteState: Quotes | null | undefined;
  quote: string | null | undefined;
  anime: string | null | undefined;
  character: string | null | undefined;
}
export const QuoteError = ({ quote, quoteState, anime, character }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">
        {quoteState ? quote : "something went wrong"}
      </Typography>
      <Typography variant="caption">
        -{quote ? character : "Unkown"} *{quote ? anime : "Life"}
      </Typography>
    </Box>
  );
};
