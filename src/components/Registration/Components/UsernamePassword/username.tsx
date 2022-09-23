import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const UserName = ({ field, form, ...props }) => {
  return (
    <TextField
      fullWidth
      autoComplete="off"
      label="Username"
      {...field}
      {...props}
    />
  );
};
