import * as yup from "yup";

const demographicSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "Must be atleast 3 characters")
    .max(20, "Cannot be longer than 20 characters")
    .required(),
  lastname: yup
    .string()
    .min(3, "Must be atleast 3 characters")
    .max(20, "Cannot be longer than 20 characters")
    .required(),
  age: yup
    .number()
    .positive()
    .max(100, "You are not older that 99, stop lying")
    .required(),
});

export default demographicSchema;
