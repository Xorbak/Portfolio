import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import React from "react";
import toDoSchema from "../Validation";

import ToDoListType from "../../../Ts/Model";
import { MyInput } from "./MyInput";

interface Props {
  toDo: ToDoListType[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
}
interface FormikFieldTypes {
  inputField: string;
}

export const GrabInput = ({ setTodo, toDo }: Props) => {
  return (
    <Formik<FormikFieldTypes>
      initialValues={{ inputField: "" }}
      onSubmit={(values, { resetForm }) => {
        setTodo((currentItem) => [
          ...currentItem,
          {
            input: values.inputField,
            key: toDo.length + values.inputField,
            completed: false,
          },
        ]);
        resetForm();
      }}
      validationSchema={toDoSchema}
    >
      {({ errors }) => {
        return (
          <Form style={{ width: "100%", paddingTop: "3%" }}>
            <Field
              name="inputField"
              component={MyInput}
              style={{ width: "100%" }}
            />
            <Typography
              style={{ color: "red", display: "flex", fontSize: "small" }}
            >
              {errors.inputField}
            </Typography>
          </Form>
        );
      }}
    </Formik>
  );
};
