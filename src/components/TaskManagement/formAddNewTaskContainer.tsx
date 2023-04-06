import React from "react";
import { TaskContainers, userDetails } from "../../Screens/TaskManagement";
import { Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { taskInput } from "./taskInput";
import axios from "axios";

interface Props {
  userDetails: userDetails;
  taskContainers: TaskContainers[];
  setTaskContainers: React.Dispatch<React.SetStateAction<TaskContainers[]>>;
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
}
interface ContainerDeatails {
  title: string;
  discription: string;
}
interface AddTaskContainer {
  title: string;
  id: string;
}
export const FormAddContainer = ({
  userDetails,
  taskContainers,
  setTaskContainers,
  toggleVisibility,
}: Props) => {
  const addTaskContainer = (title: string, id: string) => {
    const options = {
      method: "GET",
      url: "https://xorprod.herokuapp.com/manage/container/addContainer",
      params: {
        status_id: title,
        user_id: id,
        container: title,
      },
    };
    axios.request(options).then((response) => {
      console.log(response);
    });
  };
  return (
    <Grid xs={12} justifyContent={"center"}>
      <Formik<ContainerDeatails>
        initialValues={{ title: "", discription: "" }}
        onSubmit={(values, { resetForm }) => {
          addTaskContainer(values.title, userDetails.id);
          setTaskContainers((currentContainers) => [
            ...currentContainers,
            {
              status_id: values.title,
              user_id: userDetails.id,
              container: values.title,
            },
          ]);
          toggleVisibility(0);
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
                  component={taskInput}
                  name="title"
                  placeholder="Title"
                  label="Title"
                />
                <Field
                  component={taskInput}
                  name="discription"
                  placeholder="Discription"
                  label="Discription"
                  maxRows={10}
                  minRows={5}
                  multiline
                />
                <Button type="submit">Submit</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};
