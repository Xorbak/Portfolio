import Box from "@mui/material/Box";
import { Field, Form, Formik, FormikTouched } from "formik";
import React from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { ErrorText } from "../errorText";
import { demographic, Focus } from "./Demographics";
import { lastname } from "./lastName";

interface Props {
  focus: boolean;
  setFocus: (value: React.SetStateAction<Focus>) => void;
  error: string | undefined;

  touched: FormikTouched<demographic>;
  name: string;
  component: ({
    field,
    form,
    ...props
  }: {
    [x: string]: any;
    field: any;
    form: any;
  }) => JSX.Element;
}

export const FirstLastNameField = ({
  focus,
  name,

  error,
  touched,
  component,
}: Props) => {
  return (
    <Box // --------------------------------------Last name container
      onFocus={() => {
        setFocus;
      }}
      sx={errorSuccess(focus, error, touched)}
    >
      <Field
        name={name}
        component={component}
        //helperText={focus.lastname && errors.lastname}
      />
      {focus && error && <ErrorText error={error} />}
    </Box>
  );
};
function setFocus(arg0: (i: any) => any) {
  throw new Error("Function not implemented.");
}
