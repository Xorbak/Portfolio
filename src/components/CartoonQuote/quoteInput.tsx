import { TextField } from "@mui/material";
import React from "react";

//@ts-ignore
export const QuoteInput = ({ field, form, ...props }) => {
  return (
    <TextField
      sx={{ margin: "10px" }}
      multiline
      variant="outlined"
      {...field}
      {...props}
    />
  );
};
