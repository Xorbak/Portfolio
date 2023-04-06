import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface Props {
  setCurrentContainer: React.Dispatch<React.SetStateAction<string>>;
  container: string;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
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
          marginLeft: "10px",
        }}
      >
        {container}
      </Typography>
      <Grid xs={3} container justifyContent={"end"}>
        <IconButton
          onClick={() => {
            toggleVisibility(1);
            setCurrentContainer(container);
          }}
        >
          <AddCircleOutlineIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => {
            toggleVisibility(3);
            setCurrentContainer(container);
          }}
        >
          <HighlightOffIcon color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
