import { Button, Grid } from "@mui/material";
import {
  TaskContainers,
  Tasks,
  userDetails,
} from "../../Screens/TaskManagement";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskContainerTitle } from "./tasContainerTitle";
import { Task } from "./task";

interface Props {
  setCurrentContainer: React.Dispatch<React.SetStateAction<string>>;
  taskContainers: TaskContainers[] | undefined;
  setTaskContainers: React.Dispatch<
    React.SetStateAction<TaskContainers[] | undefined>
  >;
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[] | undefined;
  backgroundBlur: boolean;
  userDetails: userDetails | undefined;
  toggleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
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
      xs={10}
    >
      <Grid container flexDirection={"row"} justifyContent={"space-around"}>
        {taskContainers &&
          taskContainers.map(({ container }) => (
            <Grid
              xs={2}
              key={container}
              item
              sx={{
                backgroundColor: "background.paper",
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
                    <Grid container>
                      <Task content={`${task.task}`} />
                    </Grid>
                  ) : null
                )}
            </Grid>
          ))}
      </Grid>
      <Button
        onClick={() => {
          setLoggedin((i) => ({ ...i, isLoggedIn: false }));
        }}
      >
        Log out
      </Button>
    </Grid>
  );
};
