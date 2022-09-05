import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const emailInput = ({ field, form, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      label="Email"
      placeholder="Email"
      {...field}
      {...props}
    />
  );
};
