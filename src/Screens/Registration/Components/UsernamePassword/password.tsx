import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import React from "react";

//@ts-ignore
export const Password = ({ field, form, ...props }) => {
  //set states to toggle visibility of password field
  const [showPassword, setShowPassword] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<Visibility />);
  const togglePassword = () => {
    if (showPassword == "password") {
      setShowPassword("text");
      setPasswordIcon(<VisibilityOff />);
    } else {
      setShowPassword("password");
      setPasswordIcon(<Visibility />);
    }
  };
  return (
    <TextField
      type={showPassword}
      autoComplete="off"
      label="Password"
      {...field}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ color: "text.primary" }} onClick={togglePassword}>
              {passwordIcon}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
