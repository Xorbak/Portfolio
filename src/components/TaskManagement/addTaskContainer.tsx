import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  TaskContainers,
  Tasks,
  userDetails,
} from "../../Screens/TaskManagement";
import { TaskForm } from "./addTaskForm";
import { FormAddContainer } from "./formAddNewTaskContainer";

interface Props {
  currentContainer: string;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
  backgroundBlur: number;
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[] | undefined;
  userDetails: userDetails;
  taskContainers: TaskContainers[];
  setTaskContainers: React.Dispatch<React.SetStateAction<TaskContainers[]>>;
}
export const AddTaskContainer = ({
  userDetails,
  currentContainer,
  taskContainers,
  setTaskContainers,
  toggleVisibility,
  backgroundBlur,
  tasks,
  setTasks,
}: Props) => {
  return (
    <Grid sx={styles.App}>
      <Grid
        xs={11}
        md={6}
        boxShadow={5}
        container
        justifyContent={"center"}
        sx={{
          filter: !backgroundBlur ? "blur(0px)" : null,
        }}
      >
        <FormAddContainer
          userDetails={userDetails}
          taskContainers={taskContainers}
          setTaskContainers={setTaskContainers}
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
    backgroundColor: "transparent",
    zIndex: "100",
    width: "100%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
