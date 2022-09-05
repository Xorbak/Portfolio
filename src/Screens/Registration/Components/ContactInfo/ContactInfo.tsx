import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { emailInput } from "./emailInput";
import { phoneNumberInput } from "./phoneNumberInput";
import { postalAdress } from "./postalAdress";
import contactinfoVal from "../validation/contactinfoVal";
import { formModal, userInfoTypes } from "../../RegistrationForm";

interface ContactinfoInterface {
  email: string;
  phoneNumber: number;
  postalAddress: string;
}

interface Props {
  setUserinfo: React.Dispatch<React.SetStateAction<userInfoTypes | null>>;
  userinfo: userInfoTypes | null;
  setFormModal: React.Dispatch<React.SetStateAction<formModal>>;
}
interface Focus {
  email: boolean;
  phoneNumber: boolean;
  postalAddress: boolean;
}

//@ts-ignore
export const ContactInfo = (
  { setUserinfo, setFormModal }: Props,
  touched: any
) => {
  const [focus, setFocus] = useState<Focus>({
    email: false,
    phoneNumber: false,
    postalAddress: false,
  });

  return (
    <Formik<ContactinfoInterface>
      initialValues={{ email: "", phoneNumber: 0, postalAddress: "" }}
      onSubmit={(values) => {
        let email = values.email;
        let phoneNumber = values.phoneNumber;
        let postalAddress = values.postalAddress;

        setUserinfo((userinfo: any) => ({
          ...userinfo,
          email,
          phoneNumber,
          postalAddress,
        }));
        setFormModal({
          identification: false,
          contactDetails: false,
          demographics: true,
          review: false,
        });
      }}
      validationSchema={contactinfoVal}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            <Box sx={styles.formContainer}>
              <Box
                onFocus={() => {
                  setFocus((i) => ({ ...i, email: true }));
                }}
                sx={
                  focus.email && touched
                    ? errors.email
                      ? styles.errorState
                      : styles.successState
                    : null
                }
              >
                <Field
                  sx={{ width: "100%" }}
                  name="email"
                  component={emailInput}
                  helperText={errors.email}
                />
              </Box>
              <Box
                onFocus={() => {
                  setFocus((i) => ({ ...i, phoneNumber: true }));
                }}
                sx={
                  focus.phoneNumber && touched
                    ? errors.phoneNumber
                      ? styles.errorState
                      : styles.successState
                    : null
                }
              >
                <Field
                  sx={{ width: "100%" }}
                  name="phoneNumber"
                  component={phoneNumberInput}
                  helperText={focus.phoneNumber && errors.phoneNumber}
                />
              </Box>
              <Box>
                <Field
                  sx={{ width: "100%" }}
                  name="postalAddress"
                  component={postalAdress}
                  helperText={errors.postalAddress}
                />
              </Box>

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
    label: { color: "error.main", fontWeight: "bolder" },
    fieldset: { borderColor: "error.main", borderWidth: "2px" },
  },
  formContainer: {
    display: "grid",
    fontSize: "small",
    gridTemplateColumns: "1fr",
    justifyContent: "space-around",
    gridAutoRows: "minmax(2vh, auto)",

    backgroundColor: "background.paper",
    minHeight: "260px",
    width: "30vw",
    borderRadius: "5px",

    paddingTop: "2%",
    "@media (max-width:768px)": {
      height: "300px",
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
  errorMessage: {
    color: "error.main",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    fontSize: "small",
  },
};
