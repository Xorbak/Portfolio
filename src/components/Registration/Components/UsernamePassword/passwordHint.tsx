import { CloseSharp } from "@mui/icons-material";
import Check from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  check: boolean;
  message: string;
}

export const PasswordHint = ({ check, message }: Props) => {
  return check ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
        color: "success.main",
      }}
    >
      <Typography variant="caption" sx={{ width: { xs: "50%", sm: "100%" } }}>
        {message}
      </Typography>
      <Check fontSize="small" />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
        color: "primary.main",
      }}
    >
      <Typography variant="caption" sx={{ width: { xs: "50%", sm: "100%" } }}>
        {message}
      </Typography>
      <CloseSharp fontSize="small" />
    </Box>
  );
};
