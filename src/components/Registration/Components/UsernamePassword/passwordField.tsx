import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormikTouched } from "formik";
import { Field, Form, Formik } from "formik";
import React from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import {
  lengthCheck,
  lowerCheck,
  numberCheck,
  passwordCheck,
  specialCheck,
  upperCheck,
} from "../validation/idschema";
import { Password } from "./password";
import { PasswordHint } from "./passwordHint";
import { Focus, IDinterface } from "./UsernamePassword";

interface Props {
  setFocus: React.Dispatch<React.SetStateAction<Focus>>;
  focus: boolean;
  errors: string | undefined;
  touched: FormikTouched<IDinterface>;
  input: string;
}
export const PasswordField = ({
  setFocus,
  focus,
  errors,
  touched,
  input,
}: Props) => {
  const errorsArray = [
    {
      check: specialCheck.isValidSync(input),
      message: "One Special character",
    },
    {
      check: lengthCheck.isValidSync(input),
      message: "Atleast 8 characters",
    },
    {
      check: upperCheck.isValidSync(input),
      message: "One Uppercase",
    },
    {
      check: lowerCheck.isValidSync(input),
      message: "One lowercase",
    },

    {
      check: numberCheck.isValidSync(input),
      message: "One number",
    },
  ];
  return (
    <Box //Password Box
      sx={{ width: { xs: "100%", sm: "48%" }, paddingBottom: "2%" }}
    >
      <Field
        // password input validation
        onFocus={() => {
          setFocus((i) => ({ ...i, password: true }));
        }}
        //sets the Error/success state
        sx={errorSuccess(focus, errors, touched)}
        name="password"
        label="Password"
        component={Password}
        //helperText={focus.password && errors.password}
        //Temp fix untill I can Change the helpertext size
      />
      <Typography
        variant="caption"
        color={
          passwordCheck.isValidSync(input) ? "success.main" : "primary.main"
        }
        sx={{ textDecoration: "underline", marginLeft: "10px" }}
      >
        Your Password must have:
      </Typography>

      {errorsArray.map(({ check, message }) => {
        return <PasswordHint check={check} message={message} />;
      })}
    </Box>
  );
};
