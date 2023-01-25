import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  inspiration: number;
}

export const Inspirationline = ({ inspiration }: Props) => {
  return (
    <React.Fragment>
      <Typography
        sx={{ display: { xs: "block", md: "none" } }} //@ts-ignore
        variant={`h${inspiration}`}
      >
        {inspiration == 2
          ? "YOU'VE REACHED MAX LEVEL OF INSPIRATION CALMDOWN"
          : "INSPIRATION"}
      </Typography>{" "}
      <Typography
        sx={{ display: { xs: "none", md: "block" } }} //@ts-ignore
        variant={`h${inspiration}`}
      >
        {inspiration == 1
          ? "YOU'VE REACHED MAX LEVEL OF INSPIRATION CALMDOWN"
          : "INSPIRATION"}
      </Typography>
    </React.Fragment>
  );
};
