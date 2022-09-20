import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  error: string | undefined;
}

export const ErrorText = ({ error }: Props) => {
  return (
    <Box sx={{ marginLeft: "15px" }}>
      <Typography //Temporary fix untill I can change the size of the helper text
        sx={{ color: "error.main" }}
        variant="caption"
      >
        {error}
      </Typography>
    </Box>
  );
};
