import { Button, Grid } from "@mui/material";
import {
  TaskContainers,
  Tasks,
  userDetails,
} from "../../Screens/TaskManagement";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskContainerTitle } from "./taskContainerTitle";
import { Task } from "./task";

interface Props {
  setCurrentContainer: React.Dispatch<React.SetStateAction<string>>;
  taskContainers: TaskContainers[] | undefined;
  setTaskContainers: React.Dispatch<React.SetStateAction<TaskContainers[]>>;
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[];
  backgroundBlur: number;
  userDetails: userDetails | undefined;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
  setLoggedin: React.Dispatch<
    React.SetStateAction<{
      isLoggedIn: boolean;
      isRegistered: boolean;
    }>
  >;
}

export const TaskUserDetails = ({
  setCurrentContainer,
  taskContainers,
  setTaskContainers,
  setTasks,
  tasks,
  userDetails,
  setLoggedin,
  toggleVisibility,
  backgroundBlur,
}: Props) => {
  // first find the container
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://xorprod.herokuapp.com/manage/container",
      params: { user_id: userDetails && userDetails.id.toString() },
    };
    axios.request(options).then((result) => {
      setTaskContainers(result.data.documents);
    });
  }, [userDetails]);
  //then find the task pulls only tasks for a given user ID the stores it in the task sate
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://xorprod.herokuapp.com/manage/task",
      params: { user_id: userDetails && userDetails.id.toString() },
    };
    axios.request(options).then((result) => {
      console.log(result.data.documents);
      setTasks(result.data.documents);
    });
  }, [taskContainers]);

  return (
    <Grid
      sx={{ filter: backgroundBlur ? "blur(10px)" : null }}
      justifyContent={"center"}
      alignContent="center"
      container
      flexDirection="row"
      xs={12}
      md={11}
    >
      <Grid
        container
        flexDirection={"row"}
        justifyContent={{ xs: "center", md: "space-evenly" }}
      >
        {taskContainers && // render the correct task container
          taskContainers.map(({ container }) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={container}
              item
              sx={{
                backgroundColor: "background.paper",
                margin: "5px",
                borderRadius: "5px",

                minHeight: "10rem",
              }}
            >
              <TaskContainerTitle
                setCurrentContainer={setCurrentContainer}
                container={container}
                toggleVisibility={toggleVisibility}
              />

              {tasks && //then render the correct task in the correct container
                tasks.map((task) =>
                  task.container == container ? (
                    <Grid container justifyContent={"center"} marginY={"5px"}>
                      <Task
                        parentContainer={container}
                        task={tasks}
                        setTask={setTasks}
                        content={`${task.task}`}
                        id={`${task.task_id}`}
                        taskContainers={taskContainers}
                      />
                    </Grid>
                  ) : null
                )}
            </Grid>
          ))}
      </Grid>
      <Button
        onClick={() => {
          setTasks([]);
          setTaskContainers([]);
          setLoggedin((i) => ({ ...i, isLoggedIn: false }));
        }}
      >
        Log out
      </Button>
    </Grid>
  );
};
