import TextField from "@mui/material/TextField";
import React from "react";
//@ts-ignore
export const postalAdress = ({ field, form, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      label="Postal address"
      placeholder="Postal address"
      {...field}
      {...props}
    />
  );
};
