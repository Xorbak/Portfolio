import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { TaskContainers } from "../../Screens/TaskManagement";

interface Props {
  currentContainer: string;
  taskContainers: TaskContainers[];
  setTaskContainers: React.Dispatch<React.SetStateAction<TaskContainers[]>>;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
}
export const ConfirmContainerDeletion = ({
  setTaskContainers,
  taskContainers,
  currentContainer,
  toggleVisibility,
}: Props) => {
  return (
    <Grid xs={11} md={6} container sx={styles.App}>
      {" "}
      <Grid xs={12} boxShadow={5} container justifyContent={"center"}>
        <Typography sx={{ marginBottom: "50px" }} variant="h4">
          Are you sure you want to Delete "{currentContainer}" and all tasks
          contained in it?
        </Typography>
        <Grid container justifyContent={"Center"}>
          <Button
            onClick={() => {
              setTaskContainers(
                taskContainers.filter(
                  (currentItem) => currentItem.container != currentContainer
                )
              );
              toggleVisibility(0);
            }}
            size="large"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              toggleVisibility(0);
            }}
            size="large"
          >
            No
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  App: {
    textAlign: "center",
    filter: "0px",
    display: "flex",
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: "100",
    width: "100%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
