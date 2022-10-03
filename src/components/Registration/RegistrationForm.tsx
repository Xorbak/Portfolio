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

export const RegistrationForm = () => {
  const [userinfo, setUserinfo] = useState<userInfoTypes>();
  const [formModal, setFormModal] = useState<number>(2);

  return (
    <Box sx={styles.App}>
      {formModal === 0 && (
        <UsernamePassword
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
          formModal={formModal}
        />
      )}
      {formModal === 1 && (
        <ContactInfo
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
          formModal={formModal}
        />
      )}
      {formModal === 2 && (
        <Demographics
          userinfo={userinfo}
          setUserinfo={setUserinfo}
          setFormModal={setFormModal}
          formModal={formModal}
        />
      )}
      {formModal === 3 && (
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
