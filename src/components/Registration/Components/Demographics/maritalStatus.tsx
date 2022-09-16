import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

//@ts-ignore
export const married = ({ field, form, ...props }) => {
  return (
    <Box>
      <FormLabel>Mariage Status</FormLabel>
      <RadioGroup
        row
        sx={{ color: "rgba(0, 0, 0, 0.6)" }}
        {...field}
        {...props}
      >
        <FormControlLabel //map through an array instead
          value="Unmarried"
          control={<Radio size="small" />}
          label="Unmarried"
        />
        <FormControlLabel
          value="Married"
          control={<Radio size="small" />}
          label="Married"
        />
        <FormControlLabel
          value="Divorced"
          control={<Radio size="small" />}
          label="Divorced"
        />
        <FormControlLabel
          value="Widowed"
          control={<Radio size="small" />}
          label="Widowed"
        />
      </RadioGroup>
    </Box>
  );
};
