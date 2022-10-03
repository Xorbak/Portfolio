import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { emailInput } from "./emailInput";
import { phoneNumberInput } from "./phoneNumberInput";
import { postalAdress } from "./postalAdress";
import contactinfoVal from "../validation/contactinfoVal";
import { userInfoTypes } from "../../RegistrationForm";
import { errorSuccess } from "../../../../HelperFunctions/errorSuccess";
import { ErrorText } from "../errorText";

interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | undefined>>;
  userinfo: userInfoTypes | null | undefined;
  setFormModal: React.Dispatch<React.SetStateAction<number>>;
  formModal: number;
}

interface ContactinfoInterface {
  email: string;
  phoneNumber: number | null;
  postalAddress: string;
}

//  ensures the correct element has focus so that it doesnt default
//  to the success state as soon as the page renders
interface Focus {
  email: boolean;
  phoneNumber: boolean;
  postalAddress: boolean;
}

//@ts-ignore
export const ContactInfo = (
  { setUserinfo, setFormModal, formModal }: Props,
  touched: any
) => {
  //got a big error saying boolean cant be undefined.
  //got to set all the focus states as false before I start
  const [focus, setFocus] = useState<Focus>({
    email: false,
    phoneNumber: false,
    postalAddress: false,
  });

  return (
    <Formik<ContactinfoInterface>
      initialValues={{ email: "", phoneNumber: null, postalAddress: "" }}
      onSubmit={(values) => {
        let email = values.email;
        // build a state that can hold countries for their codes
        let phoneNumber = "+27" + values.phoneNumber;
        let postalAddress = values.postalAddress;

        setUserinfo((userinfo: any) => ({
          // not sure what typing to use here
          ...userinfo,
          email,
          phoneNumber,
          postalAddress,
        }));
        //move to the next page
        setFormModal(formModal + 1);
      }}
      validationSchema={contactinfoVal}
    >
      {({ errors, touched }) => {
        //it works but can be better, come back to this later

        return (
          <Form>
            <Box sx={styles.formContainer}>
              <Box //---------------------------------------Email container
                onFocus={() => {
                  setFocus((i) => ({ ...i, email: true }));
                }}
                sx={errorSuccess(focus.email, errors.email, touched)}
              >
                <Field
                  sx={{ width: "100%" }}
                  name="email"
                  component={emailInput}
                  //helperText={focus.email && errors.email}
                />
                {focus.email && errors.email && (
                  <ErrorText error={errors.email} />
                )}
              </Box>
              <Box //--------------------------------------Phone number container
                onFocus={() => {
                  setFocus((i) => ({ ...i, phoneNumber: true }));
                }}
                sx={errorSuccess(
                  focus.phoneNumber,
                  errors.phoneNumber,
                  touched
                )}
              >
                <Field
                  sx={{ width: "100%" }}
                  name="phoneNumber"
                  component={phoneNumberInput}
                  //helperText={focus.phoneNumber && errors.phoneNumber}
                />
                {focus.phoneNumber && errors.phoneNumber && (
                  <ErrorText error={errors.phoneNumber} />
                )}
              </Box>
              <Box //--------------------------------------postal Address
              >
                <Field
                  sx={{ width: "100%" }}
                  name="postalAddress"
                  component={postalAdress}
                  helperText={errors.postalAddress}
                />
              </Box>
              <Box sx={styles.buttonSpacing}>
                <Button onClick={() => setFormModal(formModal - 1)}>
                  Back
                </Button>
                <Button type="submit">Submit</Button>
              </Box>
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
    P: {
      color: "error.main",
      fontSize: {
        xs: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
      },
    },
    label: { color: "error.main", fontWeight: "50px" },
    fieldset: { borderColor: "error.main", borderWidth: "2px" },
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
  buttonSpacing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
};
