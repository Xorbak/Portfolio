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
    justifyContent: { xs: "start", sm: "center" },
    paddingTop: { xs: "10%", sm: "0%" },
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
};
