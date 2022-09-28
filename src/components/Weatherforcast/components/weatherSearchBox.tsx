import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { Search } from "@mui/icons-material";
//@ts-ignore
export const WeatherSearchBox = ({ field, form, ...props }) => {
  return (
    <TextField
      sx={{ width: "150px" }} // make the hover thiner
      variant="standard"
      autoComplete="off"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              style={{
                color: "black",
                padding: "0px",
                margin: "0px",
                minWidth: "10px",
              }}
              type="submit"
            >
              <Search />
            </Button>
          </InputAdornment>
        ),
      }}
      {...field}
      {...props}
    />
  );
};
