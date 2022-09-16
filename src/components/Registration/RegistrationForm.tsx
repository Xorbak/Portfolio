import Box from "@mui/material/Box";
import React, { useState } from "react";
import { UsernamePassword } from "./Components/UsernamePassword/UsernamePassword";
import { Demographics } from "./Components/Demographics/Demographics";
import { ContactInfo } from "./Components/ContactInfo/ContactInfo";
import { Review } from "./Components/review";

export interface userInfoTypes {
  username?: string | null;
  password?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  phoneNumber?: number | null;
  postalAddress?: string | null;
  age?: number | null;
  married?: string | null;
  highestEducation?: string | null;
}

export interface formModal {
  identification: boolean;
  contactDetails: boolean;
  demographics: boolean;
  review: boolean;
}
export const RegistrationForm = () => {
  const [userinfo, setUserinfo] = useState<userInfoTypes>();

  //Sets Demographics

  //show/hide certain windows

  const [formModal, setFormModal] = useState<formModal>({
    // Each step opens the next window by making the current state false and the next true, numbers might work better
    identification: false,
    contactDetails: false,
    demographics: true,
    review: false,
  });

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
      {formModal.review && (
        <Box>
          <Review userinfo={userinfo} />
        </Box>
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
