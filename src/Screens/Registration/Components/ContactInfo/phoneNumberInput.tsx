import TextField from "@mui/material/TextField";
import React from "react";
//@ts-ignore
export const phoneNumberInput = ({ field, form, ...props }) => {
  return (
    <TextField
      type={"number"}
      autoComplete="off"
      label="Phone number"
      placeholder="Phone number"
      {...field}
      {...props}
    />
  );
};
