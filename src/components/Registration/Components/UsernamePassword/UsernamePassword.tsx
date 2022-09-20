import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { formModal, userInfoTypes } from "../../RegistrationForm";
import { ErrorText } from "../errorText";

import idschema from "../validation/idschema";
import { Password } from "./password";
import { UserName } from "./username";

interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | undefined>>;

  userinfo: userInfoTypes | null | undefined;
  setFormModal: React.Dispatch<React.SetStateAction<formModal>>;
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
        setFormModal({
          identification: false,
          contactDetails: true,
          demographics: false,
          review: false,
        });
        resetForm();
      }}
      validationSchema={idschema}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <Box sx={styles.formContainer}>
              <Box
                //username input field validation
                onFocus={() => {
                  setFocus((i) => ({ ...i, username: true })),
                    console.log(focus);
                }}
                sx={errorSuccess(focus.username, errors.userName, touched)}
                //sets the Error/success state
              >
                <Field
                  sx={{ width: "100%" }}
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
                // password input validation
                onFocus={() => {
                  setFocus((i) => ({ ...i, password: true }));
                }}
                //sets the Error/success state
                sx={errorSuccess(focus.password, errors.password, touched)}
              >
                <Field
                  sx={{ width: "100%" }}
                  name="password"
                  label="Password"
                  component={Password}
                  //helperText={focus.password && errors.password}
                  //Temp fix untill I can Change the helpertext size
                />
                {focus.password && errors.password && (
                  <ErrorText error={errors.password} />
                )}
              </Box>

              <Box
                // confirmPassword input validation
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
              >
                <Field
                  sx={{ width: "100%" }}
                  name="confirmPassword"
                  label="Confirm Password"
                  component={Password}
                  //helperText={focus.confirmpassword && errors.confirmPassword}
                />
                {focus.confirmpassword && errors.confirmPassword && (
                  <ErrorText error={errors.confirmPassword} />
                )}
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
    display: "grid",
    fontSize: "medium",
    gridTemplateColumns: "1fr",
    justifyContent: "space-around",
    gridAutoRows: "minmax(1vh, auto)",
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
