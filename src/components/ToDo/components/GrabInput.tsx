import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import React from "react";
import toDoSchema from "../Validation";

import ToDoListType from "../../../Ts/Model";
import { MyInput } from "./MyInput";

interface Props {
  toDo: ToDoListType[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  setTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FormikFieldTypes {
  inputField: string;
}

export const GrabInput = ({ setTodo, toDo, setTodoModal }: Props) => {
  const addTodo = (input: string, key: string) => {
    fetch("https://krat.es/6685b8328aa899faddec/todo", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        input: input,
        status: key,
      }),
    }).then(async () => {
      await fetch("https://krat.es/6685b8328aa899faddec/todo")
        .then((res) => res.json())
        .then((result) => {
          setTodo(result);
        });
    });
  };

  return (
    <Formik<FormikFieldTypes>
      initialValues={{ inputField: "" }}
      onSubmit={(values, { resetForm }) => {
        setTodo((currentItem) => [
          ...currentItem,
          {
            input: values.inputField,
            _id: toDo.length + values.inputField, // might have to change to random number
            status: "Pending",
          },
        ]);
        const key = toDo.length + values.inputField;
        setTodoModal(true);
        resetForm();
        addTodo(values.inputField, "Pending");
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
              style={{ color: "red", display: "flex", fontSize: "x-small" }}
            >
              {errors.inputField}
            </Typography>
          </Form>
        );
      }}
    </Formik>
  );
};
