import TextField from "@mui/material/TextField";
import React, { useState } from "react";

//@ts-ignore
export const firstname = ({ field, form, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <TextField
      fullWidth
      onKeyDownCapture={(key) => {
        /\d/g.test(key.key) && key.preventDefault();
      }}
      autoComplete="off"
      label="First Name"
      {...field}
      {...props}
    />
  );
};
