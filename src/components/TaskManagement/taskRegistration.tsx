import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { taskInput } from "./taskInput";

interface Props {
  register: React.Dispatch<
    React.SetStateAction<{
      isLoggedIn: boolean;
      isRegistered: boolean;
    }>
  >;
}
export const TaskRegistration = ({ register }: Props) => {
  return (
    <Grid
      xs={4}
      item
      sx={{ backgroundColor: "background.paper", borderRadius: "5px" }}
      boxShadow={5}
      container
      flexDirection={"column"}
    >
      {" "}
      <Typography variant="h5">Registration</Typography>
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        onSubmit={(values, { resetForm }) => {
          const options = {
            method: "GET",
            url: "http://localhost:5000/dbcreateuser",
            params: { username: values.username, password: values.password },
          };
          axios.request(options).then((result) => console.log(result));
          resetForm;
        }}
      >
        {() => {
          return (
            <Form>
              <Field
                name="username"
                lable="Username"
                placeholder="Username"
                component={taskInput}
              />
              <Field
                name="name"
                lable="name"
                placeholder="name"
                component={taskInput}
              />
              <Field
                name="surname"
                lable="surname"
                placeholder="surname"
                component={taskInput}
              />
              <Field
                name="password"
                lable="Password"
                placeholder="Password"
                component={taskInput}
              />
              <Button type="submit">Submit</Button>
            </Form>
          );
        }}
      </Formik>
      <Button
        onClick={() =>
          register((currentItem) => ({ isRegistered: true, isLoggedIn: true }))
        }
      >
        Log in!
      </Button>
      <Button
        onClick={() =>
          register((currentItem) => ({ ...currentItem, isRegistered: true }))
        }
      >
        Remembered your details?
      </Button>
    </Grid>
  );
};
