import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

//@ts-ignore
export const DateSelector = ({ field, form, ...props }) => {
  return (
    <DatePicker
      defaultValue={new Date()}
      sx={{ width: "60%", margin: "10px" }}
      {...field}
      {...props}
    />
  );
};
