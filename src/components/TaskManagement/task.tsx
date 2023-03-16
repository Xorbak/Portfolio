import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  content: string;
}
export const Task = ({ content }: Props) => {
  return (
    <Grid container>
      <Typography
        sx={{
          paddingLeft: "5px",
          textAlign: "start",
          width: "100%",
          marginX: "10px",
          marginY: "5px",
          border: "1px solid",
          borderColor: "primary.dark",
          borderRadius: "5px",
          backgroundColor: "primary.dark",
        }}
      >
        {content}
      </Typography>
    </Grid>
  );
};
