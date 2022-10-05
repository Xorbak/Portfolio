import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  quote: string | null | undefined;
  anime: string | null | undefined;
  character: string | null | undefined;
}
export const QuoteMessage = ({ quote, anime, character }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">{quote}</Typography>
      <Typography variant="caption">
        -{character} *{anime}
      </Typography>
    </Box>
  );
};
