import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import React from "react";
import toDoSchema from "../Validation";

import ToDoListType from "../../../Ts/Model";
import { MyInput } from "./MyInput";
import axios from "axios";

interface Props {
  toDo: ToDoListType[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  setTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FormikFieldTypes {
  inputField: string;
}

export const GrabInput = ({ setTodo, toDo, setTodoModal }: Props) => {
  const newAddTodo = async (input: string, status: string) => {
    const options = {
      method: "GET",
      url: "https://xorprod.herokuapp.com/todo/post",
      params: {
        _id: Date.now(),
        input: input,
        status: status,
      },
    };
    axios.request(options).then((res) => console.log(res));
  };

  return (
    <Formik<FormikFieldTypes>
      initialValues={{ inputField: "" }}
      onSubmit={(values, { resetForm }) => {
        setTodo((currentItem) => [
          ...currentItem,
          {
            input: values.inputField,
            // might have to change to random number
            status: "Pending",
          },
        ]);
        const key = toDo.length + values.inputField;
        setTodoModal(true);
        resetForm();
        newAddTodo(values.inputField, "Pending");
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
