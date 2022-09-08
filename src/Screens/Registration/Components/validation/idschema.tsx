import * as yup from "yup";
//@ts-ignore

const idschema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(15, "Username can only be 15 characters long")
    .required("You cant have an empty username"),
  password: yup
    .string()
    .min(8, "Your password must be atleast 8 characters long ")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm,
      "Password must have at least 8 characters,contain at least 1 uppercase letter, 1 lowercase letter,1 special character, and 1 number."
    )
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required "),
});
export default idschema;
