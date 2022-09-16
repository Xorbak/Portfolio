import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const age = ({ field, form, ...props }) => {
  return (
    <TextField
      fullWidth
      placeholder="0"
      type={"number"}
      autoComplete="off"
      label="age"
      {...field}
      {...props}
    />
  );
};
