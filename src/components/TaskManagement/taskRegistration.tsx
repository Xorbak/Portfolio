import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  register: React.Dispatch<
    React.SetStateAction<{
      isLoggedIn: boolean;
      isRegistered: boolean;
    }>
  >;
}
export const TaskRegistration = ({ register }: Props) => {
  return (
    <Grid>
      <Typography variant="h5">Registration</Typography>
      <Button
        onClick={() =>
          register((currentItem) => ({ isRegistered: true, isLoggedIn: true }))
        }
      >
        Log in!
      </Button>
      <Button
        onClick={() =>
          register((currentItem) => ({ ...currentItem, isRegistered: true }))
        }
      >
        Remembered your details?
      </Button>
    </Grid>
  );
};
