import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
//@ts-ignore

export const tipInput = ({ form, field, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      sx={styles.scroll}
      type="number"
      size="small"
      {...field}
      {...props}
      InputLabelProps={{
        shrink: true,
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
