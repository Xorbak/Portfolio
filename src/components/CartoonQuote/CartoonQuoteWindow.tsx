import Box from "@mui/material/Box";
import React, { useState } from "react";
import { AddQuoteConsole } from "./AddQuoteConsole";
import { CartoonQuotes } from "./CartoonQuotes";

export const CartoonQuoteWindow = () => {
  const [modal, setModal] = useState<boolean>(true);
  return (
    <Box>
      {modal ? (
        <CartoonQuotes setModal={setModal} />
      ) : (
        <AddQuoteConsole setModal={setModal} />
      )}
    </Box>
  );
};
