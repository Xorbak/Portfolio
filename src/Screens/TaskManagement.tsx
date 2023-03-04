import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { TaskLogIn } from "../components/TaskManagement/taskLogIn";
import { TaskRegistration } from "../components/TaskManagement/taskRegistration";
import { TaskUserDetails } from "../components/TaskManagement/taskUserDetails";
//{"_id":{"$oid":"640311a80c2abfe66e00b22b"}} <<<<<< thats how you call the objectID
export interface userDetails {
  id: string;
  name: string;
  surname: string;
  username: string;
}
export const TaskManagement = () => {
  const [loggedin, setLoggedin] = useState({
    isLoggedIn: false,
    isRegistered: true,
  });

  const [userDetails, setUserDetails] = useState<userDetails>();
  return (
    <Grid sx={styles.App}>
      {!loggedin.isLoggedIn ? (
        loggedin.isRegistered ? (
          <TaskLogIn register={setLoggedin} setUserDetails={setUserDetails} />
        ) : (
          <TaskRegistration register={setLoggedin} />
        )
      ) : (
        <React.Fragment>
          <TaskUserDetails userDetails={userDetails} />
          <Button
            onClick={() => {
              setLoggedin((i) => ({ ...i, isLoggedIn: false }));
            }}
          >
            Log out
          </Button>
        </React.Fragment>
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
