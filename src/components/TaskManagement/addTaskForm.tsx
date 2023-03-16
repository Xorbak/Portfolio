import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import { taskInput } from "./taskInput";
import React from "react";
import Button from "@mui/material/Button";
import { Tasks, userDetails } from "../../Screens/TaskManagement";

interface TaskInputs {
  name: string;
  discription: string;
  due: string;
  created: string;
}

interface Props {
  userId: string;
  currentContainer: string;
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[] | undefined;
  toggleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TaskForm = ({
  currentContainer,
  toggleVisibility,
  setTasks,
  tasks,
  userId,
}: Props) => {
  return (
    <Grid xs={12} justifyContent="center">
      <Formik<Tasks>
        initialValues={{
          task_id: "",
          user_id: "",
          container: "",
          task: "",
          discription: "",
          due: "",
          created: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setTasks((currentItems) => [
            ...currentItems,
            {
              task_id: Date.now().toString(),
              user_id: userId,
              container: currentContainer,
              task: values.task,
              created: new Date().toString(),
            },
          ]);
          toggleVisibility(false), resetForm;
        }}
      >
        {() => {
          return (
            <Form>
              <Grid
                xs={12}
                container
                flexDirection={"column"}
                justifyContent={"center"}
                alignContent="center"
              >
                <Field
                  name="task"
                  label="Name"
                  placeholder="Name"
                  component={taskInput}
                ></Field>
                <Field
                  name="discription"
                  label="Discription"
                  maxRows={10}
                  minRows={5}
                  multiline
                  placeholder="Discription"
                  component={taskInput}
                ></Field>
                <Field
                  name="due"
                  label="Due"
                  placeholder="Due"
                  component={taskInput}
                ></Field>
                <Button type="submit">Submit</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <Button onClick={() => toggleVisibility(false)}>Close Modal</Button>
    </Grid>
  );
};
