import { Button, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { formModal, userInfoTypes } from "../../RegistrationForm";
import demographicSchema from "../validation/demographicsSchema";
import { age } from "./age";
import { firstname } from "./firstName";
import { highestEducation } from "./highestEducation";
import { lastname } from "./lastName";
import { married } from "./maritalStatus";

interface demographic {
  firstname: string;
  lastname: string;
  age: number;
  married: string;
  highestEducation: string;
}
interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | null>>;
  userinfo: userInfoTypes | null;
  setFormModal: React.Dispatch<React.SetStateAction<formModal>>;
}

interface Focus {
  firstname: boolean;
  lastname: boolean;
  age: boolean;
  married: boolean;
  highestEducation: boolean;
}
//@ts-ignore

//@ts-ignore
//@ts-ignored

export const Demographics = (
  { setFormModal, userinfo, setUserinfo }: Props,
  touched: any
) => {
  const [focus, setFocus] = useState<Focus>({
    firstname: false,
    lastname: false,
    age: false,
    married: false,
    highestEducation: false,
  });
  return (
    <Formik<demographic>
      initialValues={{
        firstname: "",
        lastname: "",
        age: 0,
        married: "",
        highestEducation: "",
      }}
      onSubmit={(values) => {
        let firstname = values.firstname;
        let lastname = values.lastname;
        let age = values.age;
        let married = values.married;
        let highestEducation = values.highestEducation;

        setUserinfo((userinfo) => ({
          ...userinfo,
          firstname,
          lastname,
          age,
          married,
          highestEducation,
        }));
        setFormModal({
          identification: false,
          contactDetails: false,
          demographics: false,
          review: true,
        });
        console.log(userinfo);
      }}
      validationSchema={demographicSchema}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <Box sx={styles.formContainer}>
              <Box sx={styles.demographicContainer}>
                <Box
                  onFocus={() => {
                    setFocus((i) => ({ ...i, firstname: true }));
                  }}
                  sx={
                    focus.firstname
                      ? errors.firstname
                        ? styles.errorState
                        : styles.successState
                      : null
                  }
                >
                  <Field
                    name="firstname"
                    component={firstname}
                    helperText={focus.firstname && errors.firstname}
                  />
                </Box>
                <Box
                  onFocus={() => {
                    setFocus((i) => ({ ...i, lastname: true }));
                  }}
                  sx={
                    focus.lastname
                      ? errors.lastname
                        ? styles.errorState
                        : styles.successState
                      : null
                  }
                >
                  <Field
                    name="lastname"
                    component={lastname}
                    helperText={errors.lastname}
                  />
                </Box>
              </Box>
              <Box sx={styles.demographicContainer}>
                <Box
                  onFocus={() => {
                    setFocus((i) => ({ ...i, age: true }));
                  }}
                  sx={
                    focus.age
                      ? errors.age
                        ? styles.errorState
                        : styles.successState
                      : null
                  }
                >
                  <Field
                    name="age"
                    component={age}
                    helperText={focus.age && errors.age}
                  />
                </Box>
                <Box>
                  <Field name="highestEducation" component={highestEducation} />
                </Box>
              </Box>

              <Field name="married" component={married} />

              <Button type="submit">Submit</Button>
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
    label: { color: "success.main", fontWeight: "100px" },
  },
  errorState: {
    P: { color: "error.main", fontSize: "small" },
    label: { color: "error.main" },
    fieldset: { borderColor: "error.main", borderWidth: "2px" },
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    fontSize: "medium",
    justifyContent: "space-around",
    gridAutoRows: "minmax(50px, auto)",
    gap: "1%",
    backgroundColor: "background.paper",
    minHeight: "300px",
    width: "32vw",
    borderRadius: "5px",
    padding: "2%",
    paddingTop: "4%",

    "@media (max-width:950px)": {
      height: "400px",
      width: "50vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:650px)": {
      height: "350px",
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:487px)": {
      height: "400px",
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:250px)": {
      height: "500px",
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
  },
  errorMessage: {
    color: "error.main",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    fontSize: "small",
    paddingBottom: "2%",
    marginBottom: "2%",
  },
  demographicContainer: {
    display: "grid",
    width: "100%",
    gap: "2%",
    gridTemplateColumns: "1fr 1fr",

    "@media (max-width:250px)": { gridTemplateColumns: "1fr" },
  },
};
