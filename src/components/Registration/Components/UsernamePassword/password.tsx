import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import React from "react";

//@ts-ignore
export const Password = ({ field, form, ...props }) => {
  //set states to toggle visibility of password field
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <TextField
      type={showPassword ? "password" : "text"}
      fullWidth={{ xs: "true", sm: "false" }}
      autoComplete="off"
      {...field}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ color: "text.primary" }} onClick={togglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
