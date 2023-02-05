import TextField from "@mui/material/TextField";
import React from "react";
//@ts-ignore
export const AiInput = ({ field, form, ...props }) => {
  return <TextField size="small" autoComplete="off" {...field} {...props} />;
};
