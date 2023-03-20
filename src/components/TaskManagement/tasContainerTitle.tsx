import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

interface Props {
  setCurrentContainer: React.Dispatch<React.SetStateAction<string>>;
  container: string;
  toggleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TaskContainerTitle = ({
  container,
  toggleVisibility,
  setCurrentContainer,
}: Props) => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      {" "}
      <Typography
        variant={"h6"}
        sx={{
          textDecoration: "underline",
          textAlign: "start",
          display: "flex",
        }}
      >
        {container}
      </Typography>
      <Grid xs={2} container>
        <IconButton
          onClick={() => {
            toggleVisibility(true);
            setCurrentContainer(container);
          }}
        >
          <AddCircleOutlineIcon color="primary"></AddCircleOutlineIcon>
        </IconButton>
      </Grid>
    </Grid>
  );
};
