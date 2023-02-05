import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { userInfoTypes } from "../../RegistrationForm";
import { ErrorText } from "../errorText";
import { idschema } from "../validation/idschema";
import { ConfirmPasswordField } from "./confirmPasswordField";

import { PasswordField } from "./passwordField";
import { PasswordHint } from "./passwordHint";
import { UserName } from "./username";

interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | undefined>>;
  userinfo: userInfoTypes | null | undefined;
  setFormModal: React.Dispatch<React.SetStateAction<number>>;
  formModal: number;
}
//  ensures the correct element has focus so that it doesnt default
//  to the success state as soon as the page renders
export interface Focus {
  username: boolean;
  password: boolean;
  confirmpassword: boolean;
}

export interface IDinterface {
  userName: string;
  password: string;
  confirmPassword: string;
}

//@ts-ignore

export const UsernamePassword = ({
  setUserinfo,
  userinfo,
  setFormModal,
  formModal,
}: Props) => {
  //focus check
  const [focus, setFocus] = useState<Focus>({
    username: false,
    password: false,
    confirmpassword: false,
  });

  return (
    <Formik<IDinterface>
      initialValues={{
        userName: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, { resetForm }) => {
        let password = values.password;
        let username = values.userName;
        setUserinfo((userinfo) => ({ ...userinfo, password, username }));
        console.log(userinfo);
        setFormModal(formModal + 1);
        resetForm();
      }}
      validationSchema={idschema}
    >
      {({ errors, touched, values }) => {
        //Arry to render helper text for password validation

        return (
          <Form>
            <Box sx={styles.formContainer}>
              <Box>
                <Field
                  //username input field validation
                  onFocus={() => {
                    setFocus((i) => ({ ...i, username: true })),
                      console.log(focus);
                  }}
                  //sets the Error/success state
                  sx={errorSuccess(focus.username, errors.userName, touched)}
                  validation={errors.userName}
                  name="userName"
                  component={UserName}
                  //helperText={focus.username && errors.userName}
                  //Temp fix untill I can Change the helpertext size
                />
                {focus.username && errors.userName && (
                  <ErrorText error={errors.userName} />
                )}
              </Box>

              <Box //larger container for both Password and ConfirmPassword
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignContent: "space-around",
                  justifyContent: "space-between",
                }}
              >
                <PasswordField
                  setFocus={setFocus}
                  focus={focus.password}
                  errors={errors.password}
                  touched={touched}
                  input={values.password}
                />
                <ConfirmPasswordField
                  setFocus={setFocus}
                  focus={focus.confirmpassword}
                  errors={errors.confirmPassword}
                  touched={touched}
                />
              </Box>

              <Button
                type="submit"
                // setFocus to true on everything in focus to show all errors
                onClick={() =>
                  setFocus({
                    username: true,
                    password: true,
                    confirmpassword: true,
                  })
                }
              >
                Submit
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
const styles = {
  successState: {
    fieldset: {
      borderColor: "success.main",
      borderWidth: "2px",
    },
    label: { color: "success.main" },
  },
  errorState: {
    color: "error.main",
    P: {
      color: "error.main",
    },
    label: { color: "error.main", fontSize: "10px" },
    fieldset: {
      borderColor: "error.main",
      borderWidth: "2px",
      fontSize: "10px",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "1%",
    backgroundColor: "background.paper",
    minHeight: {
      xs: "450px",
      sm: "350px",
      md: "300px",
      lg: "300px",
      xl: "300px",
    },
    width: {
      xs: "80vw",
      sm: "500px",
      md: "500px",
      lg: "400px",
      xl: "450px",
    },
    borderRadius: "5px",
    padding: "2%",
  },
};
