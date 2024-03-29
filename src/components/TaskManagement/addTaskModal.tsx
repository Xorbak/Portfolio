import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Tasks, userDetails } from "../../Screens/TaskManagement";
import { TaskForm } from "./addTaskForm";

interface Props {
  currentContainer: string;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
  backgroundBlur: number;
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[] | undefined;
  userDetails: userDetails;
}
export const AddTaskModal = ({
  userDetails,
  currentContainer,
  toggleVisibility,
  backgroundBlur,
  tasks,
  setTasks,
}: Props) => {
  return (
    <Grid xs={11} md={6} container sx={styles.App}>
      <Grid
        xs={12}
        boxShadow={5}
        container
        justifyContent={"center"}
        sx={{
          backgroundColor: "background.paper",
          filter: !backgroundBlur ? "blur(0px)" : null,
        }}
      >
        <TaskForm
          userId={`${userDetails.id}`}
          currentContainer={currentContainer}
          setTasks={setTasks}
          tasks={tasks}
          toggleVisibility={toggleVisibility}
        />
      </Grid>{" "}
    </Grid>
  );
};

const styles = {
  App: {
    textAlign: "center",
    filter: "0px",
    display: "flex",
    position: "absolute",
    backgroundColor: "red",
    zIndex: "100",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
