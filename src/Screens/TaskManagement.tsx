import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { AddTaskContainer } from "../components/TaskManagement/addTaskContainer";
import { AddTaskModal } from "../components/TaskManagement/addTaskModal";
import { TaskLogIn } from "../components/TaskManagement/taskLogIn";
import { TaskRegistration } from "../components/TaskManagement/taskRegistration";
import { TaskUserDetails } from "../components/TaskManagement/taskUserDetails";
import { ConfirmContainerDeletion } from "../components/TaskManagement/confrimContainerDeletion";
import { FullContinerView } from "../components/TaskManagement/fullContainerView";
//{"_id":{"$oid":"640311a80c2abfe66e00b22b"}} <<<<<< thats how you call the objectID
export interface userDetails {
  id: string;
  name: string;
  surname: string;
  username: string;
}
export interface TaskContainers {
  status_id: string;
  user_id: string;
  container: string;
}
export interface Tasks {
  task_id: string;
  user_id?: string;
  container: string;
  task: string;
  discription?: string;
  due?: string | null;
  created?: string;
}
export const TaskManagement = () => {
  const [loggedin, setLoggedin] = useState({
    isLoggedIn: true, //make this false once done with the styling
    isRegistered: true,
  });
  const [taskContainers, setTaskContainers] = useState<TaskContainers[]>([]);
  const [currentContainer, setCurrentContainer] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [addTaskModal, setAddTaskModal] = useState<number>(0);
  //remove this once done testing
  const [userDetails, setUserDetails] = useState<userDetails>({
    id: "1678701490173",
    username: "l",
    name: "l",
    surname: "Dtest",
  });

  return (
    //Bunch of conditional rendering instead of new windows
    // has highest z-index to render above everything absolutely
    <Grid sx={styles.App}>
      {addTaskModal == 1 ? (
        <AddTaskModal
          //To add a task to given container
          currentContainer={currentContainer}
          userDetails={userDetails}
          setTasks={setTasks}
          tasks={tasks}
          toggleVisibility={setAddTaskModal}
          backgroundBlur={addTaskModal}
        />
      ) : null}
      {addTaskModal == 2 ? (
        <AddTaskContainer
          //Adds a window that houses tasks
          setTaskContainers={setTaskContainers}
          taskContainers={taskContainers}
          currentContainer={currentContainer}
          userDetails={userDetails}
          setTasks={setTasks}
          tasks={tasks}
          toggleVisibility={setAddTaskModal}
          backgroundBlur={addTaskModal}
        />
      ) : null}{" "}
      {addTaskModal == 3 ? (
        <ConfirmContainerDeletion
          //Delete given container confirmation window
          currentContainer={currentContainer}
          setTaskContainers={setTaskContainers}
          toggleVisibility={setAddTaskModal}
          taskContainers={taskContainers}
          userId={userDetails.id}
        />
      ) : null}{" "}
      {addTaskModal == 4 ? (
        <FullContinerView
          //shows the details and all of the
          currentContainer={currentContainer}
          tasks={tasks}
          toggleVisibility={setAddTaskModal}
          setTasks={setTasks}
          taskContainers={taskContainers}
        />
      ) : null}
      {!loggedin.isLoggedIn ? ( //First check if they are logged in
        loggedin.isRegistered ? ( //If they are not show the log in screen the register button sets wheither or not to see the register modal
          <TaskLogIn register={setLoggedin} setUserDetails={setUserDetails} />
        ) : (
          <TaskRegistration register={setLoggedin} />
        )
      ) : (
        <Grid
          container
          flexDirection={"row"}
          sx={{ filter: addTaskModal ? "blur(10px)" : null }}
        >
          {" "}
          <Grid //left aside start - the grey column
            container
            item
            xs={1}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Grid
              sx={{
                height: "100vh",
                width: "100%",
                backgroundColor: "background.paper",
              }}
            >
              <Button
                onClick={() => {
                  setAddTaskModal(2);
                }}
              >
                Add New Set
              </Button>
            </Grid>
          </Grid>
          <TaskUserDetails // screen with task containers
            setCurrentContainer={setCurrentContainer}
            taskContainers={taskContainers}
            setTaskContainers={setTaskContainers}
            setTasks={setTasks}
            tasks={tasks}
            backgroundBlur={addTaskModal}
            toggleVisibility={setAddTaskModal}
            userDetails={userDetails}
            setLoggedin={setLoggedin}
          />
        </Grid>
      )}
    </Grid>
  );
};
const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { xs: "center" },
    fontSize: "calc(10px + 2vmin)",
  },
};
