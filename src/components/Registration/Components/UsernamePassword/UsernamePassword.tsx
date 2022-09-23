import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { userInfoTypes } from "../../RegistrationForm";
import { ErrorText } from "../errorText";
import {
  idschema,
  lengthCheck,
  lowerCheck,
  numberCheck,
  passwordCheck,
  specialCheck,
  upperCheck,
} from "../validation/idschema";
import { Password } from "./password";
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

  //____________________________________________

  //____________________________________________

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
        const errorsArray = [
          {
            check: specialCheck.isValidSync(values.password),
            message: "One Special character",
          },
          {
            check: lengthCheck.isValidSync(values.password),
            message: "Atleast 8 characters",
          },
          {
            check: upperCheck.isValidSync(values.password),
            message: "One Uppercase",
          },
          {
            check: lowerCheck.isValidSync(values.password),
            message: "One lowercase",
          },

          {
            check: numberCheck.isValidSync(values.password),
            message: "One number",
          },
        ];
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
              <Box
                sx={{
                  display: "flex",
                  alignContent: "space-around",
                  justifyContent: "space-between",
                }}
              >
                <Box //Password Box
                  sx={{ width: "48%" }}
                >
                  <Field
                    // password input validation
                    onFocus={() => {
                      setFocus((i) => ({ ...i, password: true }));
                    }}
                    //sets the Error/success state
                    sx={errorSuccess(focus.password, errors.password, touched)}
                    name="password"
                    label="Password"
                    component={Password}
                    //helperText={focus.password && errors.password}
                    //Temp fix untill I can Change the helpertext size
                  />
                  <Typography
                    variant="caption"
                    color={
                      passwordCheck.isValidSync(values.password)
                        ? "success.main"
                        : "primary.main"
                    }
                    sx={{ textDecoration: "underline", marginLeft: "10px" }}
                  >
                    Your Password must have:
                  </Typography>

                  {errorsArray.map(({ check, message }) => {
                    return <PasswordHint check={check} message={message} />;
                  })}
                </Box>

                <Box //confirm Password box
                  sx={{ width: "48%" }}
                  // confirmPassword input validation
                >
                  <Field
                    onFocus={() => {
                      setFocus((i) => ({ ...i, confirmpassword: true })),
                        console.log(focus);
                    }}
                    //sets the Error/success state
                    sx={errorSuccess(
                      focus.confirmpassword,
                      errors.confirmPassword,
                      touched
                    )}
                    name="confirmPassword"
                    label="Confirm Password"
                    component={Password}
                    //helperText={focus.confirmpassword && errors.confirmPassword}
                  />
                  {focus.confirmpassword && errors.confirmPassword && (
                    <ErrorText error={errors.confirmPassword} />
                  )}
                </Box>
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
      xs: "400px",
      sm: "350px",
      md: "350px",
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
