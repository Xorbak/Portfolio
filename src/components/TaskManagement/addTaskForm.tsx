import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import { taskInput } from "./taskInput";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Tasks, userDetails } from "../../Screens/TaskManagement";
import axios from "axios";
import { DateSelector } from "./datePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  toggleVisibility: React.Dispatch<React.SetStateAction<number>>;
}

const addTaskToDb = (
  taskId: string,
  userId: string,
  currentContainer: string,
  task: string,
  createdDate: string,
  discription: string | undefined,
  due: dateFns | null | undefined
) => {
  const options = {
    method: "GET",
    url: "https://xorprod.herokuapp.com/manage/add",
    params: {
      task_id: taskId,
      user_id: userId,
      discription: discription,
      container: currentContainer,
      task: task,
      created: createdDate,
      due: due,
    },
  };
  axios.request(options).then((res) => {
    console.log(res), console.log("added");
  });
};
export const TaskForm = ({
  currentContainer,
  toggleVisibility,
  setTasks,
  tasks,
  userId,
}: Props) => {
  const CurrentDate = new Date();
  const [taskDueDate, setTaskDueDate] = useState<dateFns | null>();

  return (
    <Grid xs={12} justifyContent="center">
      <Formik<Tasks>
        initialValues={{
          task_id: "",
          user_id: "",
          container: "",
          task: "",
          discription: "",
          created: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const taskId = Date.now().toString();
          const createdDate = new Date().toString();
          console.log(taskDueDate);
          setTasks((currentItems) => [
            ...currentItems,
            {
              task_id: taskId,
              user_id: userId,
              container: currentContainer,
              task: values.task,
              created: createdDate,
              discription: values.discription,
              due: taskDueDate && taskDueDate.toString(),
            },
          ]);
          addTaskToDb(
            taskId,
            userId,
            currentContainer,
            values.task,
            createdDate,
            values.discription,
            taskDueDate
          );
          toggleVisibility(0), resetForm;
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
                />
                <Field
                  name="discription"
                  label="Discription"
                  maxRows={10}
                  minRows={5}
                  multiline
                  placeholder="Discription"
                  component={taskInput}
                ></Field>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={taskDueDate}
                    onChange={(i) => {
                      setTaskDueDate(i);
                    }}
                    sx={{ width: "60%", margin: "10px" }}
                  />
                </LocalizationProvider>
                <Button type="submit">Submit</Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <Button onClick={() => toggleVisibility(0)}>Close Modal</Button>
    </Grid>
  );
};
