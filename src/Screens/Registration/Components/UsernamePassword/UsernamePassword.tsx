import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formModal, userInfoTypes } from "../../RegistrationForm";
import idschema from "../validation/idschema";
import { ConfirmPassword } from "./confirmPassword";
import { Password } from "./password";
import { UserName } from "./username";

interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | null>>;
  userinfo: userInfoTypes | null;
  setFormModal: React.Dispatch<React.SetStateAction<formModal>>;
}
interface Focus {
  username: boolean;
  password: boolean;
  confirmpassword: boolean;
}

interface IDinterface {
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
                sx={
                  focus.username && touched
                    ? errors.userName
                      ? styles.errorState
                      : styles.successState
                    : null
                }
              >
                <Field
                  sx={{ width: "100%" }}
                  validation={errors.userName}
                  name="userName"
                  component={UserName}
                  helperText={focus.username && errors.userName}
                />
              </Box>
              <Box
                // password input validation
                onFocus={() => {
                  setFocus((i) => ({ ...i, password: true }));
                }}
                sx={
                  focus.password && touched
                    ? errors.password
                      ? styles.errorState
                      : styles.successState
                    : null
                }
              >
                <Field
                  sx={{ width: "100%" }}
                  name="password"
                  component={Password}
                  helperText={focus.password && errors.password}
                />
              </Box>

              <Box
                // confirmPassword input validation
                onFocus={() => {
                  setFocus((i) => ({ ...i, confirmpassword: true })),
                    console.log(focus);
                }}
                sx={
                  focus.confirmpassword && touched
                    ? errors.confirmPassword
                      ? styles.errorState
                      : styles.successState
                    : null
                }
              >
                <Field
                  sx={{ width: "100%" }}
                  name="confirmPassword"
                  component={ConfirmPassword}
                  helperText={focus.confirmpassword && errors.confirmPassword}
                />
              </Box>
              <Button
                type="submit"
                onClick={() =>
                  setFocus({
                    username: true,
                    password: true,
                    confirmpassword: true,
                  })
                }
              >
                {" "}
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
    label: { color: "success.main", fontWeight: "50px" },
  },
  errorState: {
    P: { color: "error.main", fontSize: "small" },
    label: { color: "error.main", fontWeight: "50px" },
    fieldset: { borderColor: "error.main", borderWidth: "2px" },
  },
  formContainer: {
    display: "grid",
    fontSize: "medium",
    gridTemplateColumns: "1fr",
    justifyContent: "space-around",
    gridAutoRows: "minmax(2vh, auto)",
    gap: "1%",
    backgroundColor: "background.paper",
    minHeight: "300px",
    width: "25vw",
    borderRadius: "5px",
    padding: "2%",

    "@media (max-width:768px)": {
      minHeight: "300px",
      width: "50vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:320px)": {
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
  },
};
