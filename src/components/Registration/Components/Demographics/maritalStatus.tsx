import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

//@ts-ignore
export const married = ({ field, form, ...props }) => {
  const marriedArray: string[] = [
    "Unmarried",
    "Married",
    "Divorced",
    "Widowed",
  ];
  return (
    <Box>
      <FormLabel>Mariage Status</FormLabel>

      <RadioGroup
        row
        sx={{ color: "rgba(0, 0, 0, 0.6)" }}
        {...field}
        {...props}
      >
        {marriedArray.map((i) => {
          return (
            <FormControlLabel //map through an array instead
              value={i}
              control={<Radio size="small" />}
              label={i}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};
