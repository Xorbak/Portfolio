import * as yup from "yup";

const demographicSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[a-zA-Z]+$/g, "Firstnames cant have numbers")
    .min(3, "Must be atleast 3 characters")
    .max(20, "Cannot be longer than 20 characters")
    .required("Firstname cannot be empty"),
  lastname: yup
    .string()
    .min(3, "Must be atleast 3 characters")
    .max(20, "Cannot be longer than 20 characters")
    .matches(/^[a-zA-Z]+$/g, "Lastnames cant have numbers")
    .required("Lastname cannot be empty"),
  age: yup
    .number()
    .nullable()
    .positive()
    .max(99, "You are not older that 99, stop lying")
    .required(),
});

export default demographicSchema;
