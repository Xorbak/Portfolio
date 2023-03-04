import { Grid, Typography } from "@mui/material";
import { userDetails } from "../../Screens/TaskManagement";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  userDetails: userDetails | undefined;
}
interface TaskContainers {
  status_id: string;
  user_id: string;
  container: string;
}
interface Tasks {
  task_id: string;
  user_id: string;
  container: string;
  task: string;
  created: string;
}
export const TaskUserDetails = ({ userDetails }: Props) => {
  const [taskContainers, setTaskContainers] = useState<TaskContainers[]>();
  const [tasks, setTasks] = useState<Tasks[]>();

  useEffect(() => {
    console.log("how many times will it run?");
    const options = {
      method: "GET",
      url: "http://localhost:5000/dbstatusContainers",
      params: { user_id: userDetails && userDetails.id.toString() },
    };
    axios.request(options).then((result) => {
      setTaskContainers(result.data.documents);
    });
  }, [userDetails]);

  useEffect(() => {
    console.log("how many times will it run?");
    const options = {
      method: "GET",
      url: "http://localhost:5000/dbtasks",
      params: { user_id: userDetails && userDetails.id.toString() },
    };
    axios.request(options).then((result) => {
      console.log(result.data.documents);
      setTasks(result.data.documents);
    });
  }, [taskContainers]);

  return (
    <Grid container flexDirection={"row"} justifyContent={"space-around"}>
      {taskContainers &&
        taskContainers.map((i) => (
          <Grid
            xs={2}
            key={i.container}
            item
            sx={{
              backgroundColor: "background.paper",
              borderRadius: "5px",
              minHeight: "10rem",
            }}
          >
            <Typography variant={"h6"} sx={{ textDecoration: "underline" }}>
              {i.container}
            </Typography>
            {tasks &&
              tasks.map((task) =>
                task.container == i.container ? (
                  <Grid container>
                    <Typography
                      sx={{
                        paddingLeft: "5px",
                        textAlign: "start",
                        width: "100%",
                        marginX: "10px",
                        marginY: "5px",
                        border: "1px solid",
                        borderColor: "primary.dark",
                      }}
                    >
                      {task.task}
                    </Typography>
                  </Grid>
                ) : null
              )}
          </Grid>
        ))}
    </Grid>
  );
};
