import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const taskInput = ({ field, form, ...props }) => {
  return (
    <TextField
      sx={{ width: "60%", margin: "10px" }}
      autoComplete="off"
      {...field}
      {...props}
    />
  );
};
