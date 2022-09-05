import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
//@ts-ignore
export const MyInput = ({ field, form, ...props }) => {
  return (
    <TextField
      variant="outlined"
      autoComplete="off"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button style={{ color: "black" }} type="submit">
              <AddCircleOutlineIcon />
            </Button>
          </InputAdornment>
        ),
      }}
      {...field}
      {...props}
    />
  );
};
