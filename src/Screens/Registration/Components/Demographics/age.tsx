import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const age = ({ field, form, ...props }) => {
  return (
    <TextField
      type={"number"}
      autoComplete="off"
      label="age"
      {...field}
      {...props}
    />
  );
};
