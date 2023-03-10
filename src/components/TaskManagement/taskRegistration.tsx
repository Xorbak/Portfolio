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
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          name: "",
          surname: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const options = {
            method: "GET",
            url: "https://xorprod.herokuapp.com/manage/newuser",
            params: {
              username: values.username,
              name: values.username,
              surname: values.surname,
              password: values.password,
            },
          };
          axios.request(options).then((result) => console.log(result));
          resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <Grid>
                <Grid>
                  <Field
                    sx={{
                      width: "27.5%",
                      marginRight: "2.5%",
                      marginY: "10px",
                    }}
                    name="name"
                    lable="Name"
                    placeholder="Name"
                    component={taskInput}
                  />
                  <Field
                    sx={{ width: "27.5%", marginLeft: "2.5%", marginY: "10px" }}
                    name="surname"
                    lable="Surname"
                    placeholder="Surname"
                    component={taskInput}
                  />
                </Grid>
                <Grid>
                  <Field
                    name="username"
                    lable="Username"
                    placeholder="Username"
                    component={taskInput}
                  />
                </Grid>
                <Grid>
                  <Field
                    name="password"
                    lable="Password"
                    placeholder="Password"
                    component={taskInput}
                  />
                </Grid>

                <Button type="submit">Submit</Button>
              </Grid>
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
