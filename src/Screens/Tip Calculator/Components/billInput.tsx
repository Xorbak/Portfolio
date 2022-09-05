import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

//@ts-ignore
export const billInput = ({ form, field, label, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      sx={styles.scroll}
      fullWidth
      type="number"
      label="Bill"
      size="small"
      {...label}
      {...field}
      {...props}
      InputProps={{
        startAdornment: <InputAdornment position="start">R</InputAdornment>,
      }}
    />
  );
};

const styles = {
  scroll: {
    width: "100px",
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
};
