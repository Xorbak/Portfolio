import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const lastname = ({ field, form, ...props }) => {
  return (
    <TextField autoComplete="off" label="Last Name" {...field} {...props} />
  );
};
