import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { userDetails } from "../../Screens/TaskManagement";
import { taskInput } from "./taskInput";

interface Props {
  setUserDetails: React.Dispatch<React.SetStateAction<userDetails | undefined>>;
  register: React.Dispatch<
    React.SetStateAction<{
      isLoggedIn: boolean;
      isRegistered: boolean;
    }>
  >;
}
interface LoginForm {
  username: string;
  password: string;
}
interface Error {
  error: string;
}
export const TaskLogIn = ({ register, setUserDetails }: Props) => {
  const [error, setError] = useState<Error>();
  return (
    <Grid
      xs={4}
      item
      sx={{ backgroundColor: "background.paper", borderRadius: "5px" }}
      boxShadow={5}
      container
      flexDirection={"column"}
    >
      <Typography sx={{ margin: "20px" }} variant="h5">
        Welcome back to Manage This!
      </Typography>
      <Formik<LoginForm>
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          const options = {
            method: "GET",
            url: "http://localhost:5000/db",
            params: { username: values.username, password: values.password },
          };
          axios.request(options).then((result) =>
            !result.data.error
              ? (setUserDetails(result.data),
                console.log(result.data),
                register((currentItem) => ({
                  ...currentItem,
                  isLoggedIn: true,
                })))
              : setError(result.data.error)
          );
          resetForm;
        }}
      >
        {() => {
          return (
            <Form>
              <Grid container flexDirection={"column"}>
                <Grid item>
                  {" "}
                  <Field
                    name="username"
                    component={taskInput}
                    label="Username"
                    placeholder="Username"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="password"
                    component={taskInput}
                    label="Password"
                    placeholder="Password"
                  />
                </Grid>
                {error && <Typography color={"error"}>{`${error}`}</Typography>}
                <Button type="submit">Log in</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>

      <Button
        sx={{ marginTop: "30px" }}
        onClick={() =>
          register((currentItem) => ({ ...currentItem, isRegistered: false }))
        }
      >
        Dont have an account yet?
      </Button>
    </Grid>
  );
};
