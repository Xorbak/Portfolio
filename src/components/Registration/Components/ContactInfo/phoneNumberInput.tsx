import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
//@ts-ignore
export const phoneNumberInput = ({ field, form, ...props }) => {
  return (
    <TextField
      sx={styles.scroll}
      autoCorrect="off"
      inputProps={{ maxLength: 10 }}
      type="tel"
      autoComplete="off"
      label="Phone number"
      placeholder="Phone number"
      {...field}
      {...props}
      //add a dropdown at somepoint to use othe contry codes
      InputProps={{
        startAdornment: <InputAdornment position="start">+27 </InputAdornment>,
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
