import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const firstname = ({ field, form, ...props }) => {
  return (
    <TextField
      fullWidth
      autoComplete="off"
      label="First Name"
      {...field}
      {...props}
    />
  );
};
