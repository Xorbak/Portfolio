import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  inspiration: number;
}

export const Inspirationline = ({ inspiration }: Props) => {
  return (
    <Typography //@ts-ignore
      variant={`h${inspiration}`}
    >
      {inspiration == 1
        ? "YOU'VE REACHED MAX LEVEL OF INSPIRATION CALMDOWN"
        : "INSPIRATION"}
    </Typography>
  );
};
