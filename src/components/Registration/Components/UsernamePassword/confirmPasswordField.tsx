import Box from "@mui/material/Box";
import { Field, Form, Formik, FormikTouched } from "formik";
import React from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { ErrorText } from "../errorText";
import { Password } from "./password";
import { Focus, IDinterface } from "./UsernamePassword";

interface Props {
  setFocus: React.Dispatch<React.SetStateAction<Focus>>;
  focus: boolean;
  errors: string | undefined;
  touched: FormikTouched<IDinterface>;
}
export const ConfirmPasswordField = ({
  setFocus,
  focus,
  errors,
  touched,
}: Props) => {
  return (
    <Box //confirm Password box
      sx={{ width: { xs: "100%", sm: "48%" } }}
    >
      <Field
        onFocus={() => {
          setFocus((i) => ({ ...i, confirmpassword: true })),
            console.log(focus);
        }}
        //sets the Error/success state
        sx={errorSuccess(focus, errors, touched)}
        name="confirmPassword"
        label="Confirm Password"
        component={Password}
        //helperText={focus.confirmpassword && errors.confirmPassword}
      />
      {focus && errors && <ErrorText error={errors} />}
    </Box>
  );
};
