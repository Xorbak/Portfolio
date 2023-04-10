import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import { TaskContainers, Tasks } from "../../Screens/TaskManagement";
import { Typography } from "@mui/material";
import { Task } from "./task";

interface Props {
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
  currentContainer: string;
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  taskContainers: TaskContainers[];
}

export const FullContinerView = ({
  toggleVisibility,
  setTasks,
  taskContainers,
  currentContainer,
  tasks,
}: Props) => {
  return (
    <Grid xs={11} md={6} container sx={styles.App}>
      <Grid
        xs={12}
        boxShadow={5}
        container
        flexDirection={"column"}
        justifyContent={"center"}
        borderRadius={"5px"}
        sx={{ backgroundColor: "background.paper" }}
      >
        <Typography variant="h4">{currentContainer}</Typography>
        {tasks.map((task) => {
          return (
            <React.Fragment>
              {task.container == currentContainer && (
                <Grid
                  container
                  justifyContent={"center"}
                  sx={{ marginY: "10px" }}
                >
                  <Task
                    parentContainer={currentContainer}
                    task={tasks}
                    setTask={setTasks}
                    content={`${task.task}`}
                    id={`${task.task_id}`}
                    taskContainers={taskContainers}
                  />
                  <Typography>{task.discription}</Typography>
                </Grid>
              )}
            </React.Fragment>
          );
        })}
        <Button
          onClick={() => {
            toggleVisibility(0);
          }}
        >
          Close this modal
        </Button>
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
