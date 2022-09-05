import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const UserName = ({ field, form, ...props }) => {
  return (
    <TextField autoComplete="off" label="Username" {...field} {...props} />
  );
};
