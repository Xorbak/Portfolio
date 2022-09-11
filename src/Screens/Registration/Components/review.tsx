import Box from "@mui/material/Box";
import React from "react";
import { userInfoTypes } from "../RegistrationForm";

interface Props {
  userinfo: userInfoTypes | undefined;
}

export const Review = ({ userinfo }: Props) => {
  return (
    <Box>
      <Box>
        {userinfo !== undefined
          ? "Username : " +
            (userinfo.username != undefined ? userinfo.username : null)
          : null}
      </Box>
      <Box>
        {userinfo !== undefined
          ? "Firstname : " +
            (userinfo.firstname != undefined ? userinfo.firstname : null)
          : null}
      </Box>
      <Box>
        {userinfo !== undefined
          ? "Lastname : " +
            (userinfo.lastname != undefined ? userinfo.lastname : null)
          : null}
      </Box>
      <Box>
        {userinfo !== undefined
          ? "Phone Number  : " +
            (userinfo.phoneNumber != undefined ? userinfo.phoneNumber : null)
          : null}
      </Box>
      <Box>
        {userinfo !== undefined
          ? "Address  : " +
            (userinfo.postalAddress != undefined
              ? userinfo.postalAddress
              : null)
          : null}
      </Box>
    </Box>
  );
};
