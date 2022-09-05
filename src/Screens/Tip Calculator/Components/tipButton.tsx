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
  const poop = (poo: number) => {
    //@ts-ignore
    setVal(poo);

    console.log("this is on the button checking the Val state", val);
  };
  return (
    <Box>
      <Button
        onClick={() => {
          //@ts-ignore
          setVal(percentage);
          poop(percentage);
        }}
      >
        {percentage}%
      </Button>
    </Box>
  );
};
