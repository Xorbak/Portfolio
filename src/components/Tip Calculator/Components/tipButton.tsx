import { Button } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import { Tip } from "../TipCalc";
//@ts-ignore

interface Props {
  val: null;
  setVal: React.Dispatch<React.SetStateAction<null>>;
  percentage: number;
}

export const TipButton = ({ val, setVal, percentage }: Props) => {
  const tipval = (tipval: number) => {
    //setting val allows the value of the tipinput to change without causing the state to change
    //also allows me to dynamically change it with buttons
    //@ts-ignore
    setVal(tipval);
  };
  return (
    <Box>
      <Button
        onClick={() => {
          //@ts-ignore
          setVal(percentage);
          tipval(percentage);
        }}
      >
        {percentage}%
      </Button>
    </Box>
  );
};
