import * as yup from "yup";

const toDoSchema = yup.object().shape({
  inputField: yup
    .string()
    .min(3,'Task must be 3 characters long')
    .max(15,'Task can only be 15 characters long')
    .required("You cant have an empty Task"),
});

export default toDoSchema;
