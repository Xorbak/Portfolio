import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const firstname = ({ field, form, ...props }) => {
  return (
    <TextField autoComplete="off" label="First Name" {...field} {...props} />
  );
};
