import { Button, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
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
  age: number | null;
  married: string;
  highestEducation: string;
}
interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | undefined>>;
  userinfo: userInfoTypes | null | undefined;
  setFormModal: React.Dispatch<React.SetStateAction<formModal>>;
}
//  ensures the correct element has focus so that it doesnt default
//  to the success state as soon as the page renders
interface Focus {
  firstname: boolean;
  lastname: boolean;
  age: boolean;
  married: boolean;
  highestEducation: boolean;
}

export const Demographics = (
  { setFormModal, userinfo, setUserinfo }: Props,
  touched: any
) => {
  //got a big error saying boolean cant be undefined.
  //got to set all the focus states as false before I start
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
        age: null,
        married: "",
        highestEducation: "",
      }}
      onSubmit={(values) => {
        //chained values didnt want to be uset in the setState
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
        //once submitted it moves to the next screen
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
                  //first and last name container
                  onFocus={() => {
                    setFocus((i) => ({ ...i, firstname: true }));
                  }}
                  sx={errorSuccess(focus.firstname, errors.firstname, touched)}
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
                  sx={errorSuccess(focus.lastname, errors.lastname, touched)}
                >
                  <Field
                    name="lastname"
                    component={lastname}
                    helperText={focus.lastname && errors.lastname}
                  />
                </Box>
              </Box>

              <Box sx={styles.demographicContainer}>
                <Box
                  //age and education container
                  onFocus={() => {
                    setFocus((i) => ({ ...i, age: true }));
                  }}
                  sx={errorSuccess(focus.age, errors.age, touched)}
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
    label: { color: "success.main" },
  },
  errorState: {
    P: { color: "error.main" },
    label: { color: "error.main", fontSize: "5px", fontWeight: "normal" },
    fieldset: { borderColor: "error.main" },
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
      lg: "500px",
      xl: "450px",
    },
    borderRadius: "5px",
    padding: "2%",
  },

  demographicContainer: {
    display: "grid",
    width: "100%",
    gap: "2%",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },

    "@media (max-width:250px)": { gridTemplateColumns: "1fr" },
  },
};
