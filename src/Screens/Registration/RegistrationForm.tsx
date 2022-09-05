import Box from "@mui/material/Box";

import React, { useState } from "react";
import { UsernamePassword } from "./Components/UsernamePassword/UsernamePassword";
import { Demographics } from "./Components/Demographics/Demographics";
import { ContactInfo } from "./Components/ContactInfo/ContactInfo";

export interface userInfoTypes {
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: number;
  postalAddress?: string;
  age?: number;
  married?: string;
  highestEducation?: string;
}

export interface formModal {
  identification: boolean;
  contactDetails: boolean;
  demographics: boolean;
  review: boolean;
}
export const RegistrationForm = () => {
  const [userinfo, setUserinfo] = useState<userInfoTypes | null>(null);

  //Sets Demographics

  //show/hide certain windows

  const [formModal, setFormModal] = useState<formModal>({
    identification: true,
    contactDetails: false,
    demographics: false,
    review: false,
  });
  console.log(userinfo);
  return (
    <Box sx={styles.App}>
      {formModal.identification && (
        <UsernamePassword
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
        />
      )}
      {formModal.contactDetails && (
        <ContactInfo
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
        />
      )}
      {formModal.demographics && (
        <Demographics
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
        ></Demographics>
      )}
    </Box>
  );
};

const styles = {
  App: {
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  formContainer: {
    fieldset: { borderColor: "green" },
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "space-around",
    gridAutoRows: "minmax(2vh, auto)",
    gap: "1%",
    backgroundColor: "background.paper",
    height: "40vh",
    width: "30vw",
    borderRadius: "5px",
    padding: "2%",
    paddingTop: "4%",
    "@media (max-width:950px)": {
      height: "40vh",
      width: "50vw",
      padding: "1%",
      paddingTop: "5%",
    },
    "@media (max-width:650px)": {
      height: "40vh",
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
  },
};
