import * as yup from "yup";

const idschema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(15, "Username can only be 15 characters long")
    .required("You cant have an empty username"),
  password: yup
    .string()
    .required("Please Enter your password")
    .min(8, "Your password must be longer than 8 characters.")
    .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Must Contain One Uppercase, One Lowercase"
    )
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Must Contain One Special Case Character")
    .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required "),
});
export default idschema;
