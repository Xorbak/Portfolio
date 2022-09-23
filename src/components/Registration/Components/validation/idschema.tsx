import * as yup from "yup";

export const idschema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(15, "Username can only be 15 characters long")
    .required("You cant have an empty username"),
  password: yup
    .string()

    .min(8, "Your password must be longer than 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
      "Password must have at least 8 characters,contain at least 1 uppercase letter, 1 lowercase letter,1 special character, and 1 number."
    )
    .required("Please Enter your password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required "),
});

export const lengthCheck = yup
  .string()
  .min(8, "Must be atleast 8 characters long");
export const numberCheck = yup
  .string()
  .matches(/(?=.*\d)/, "Must contain one number");
export const lowerCheck = yup
  .string()
  .matches(/(?=.*[a-z])/, "Must contain one Lowercase letter");
export const upperCheck = yup
  .string()
  .matches(/(?=.*[A-Z])/, "Must contain one uppercase letter");
export const specialCheck = yup
  .string()
  .matches(/[@$!%*#?&]/, "Must contain one uppercase letter");
export const passwordCheck = yup
  .string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm,
    "Password must have at least 8 characters,contain at least 1 uppercase letter, 1 lowercase letter,1 special character, and 1 number."
  );
