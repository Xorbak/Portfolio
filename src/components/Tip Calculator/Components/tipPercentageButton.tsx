import Box from "@mui/material/Box";
import React from "react";
import { Tip } from "../TipCalc";
import { TipButton } from "./tipButton";

interface Props {
  setTipData: React.Dispatch<React.SetStateAction<Tip | undefined>>;

  val: null;
  setVal: React.Dispatch<React.SetStateAction<null>>;
}

export const TipPercentageButton = ({
  setTipData,

  val,
  setVal,
}: Props) => {
  const tipArray: number[] = [5, 10, 15, 20];
  return (
    <Box sx={styles.tipButtonBox}>
      {tipArray.map((i) => {
        return <TipButton percentage={i} val={val} setVal={setVal} />;
      })}
    </Box>
  );
};

const styles = {
  inputBox: {
    display: "grid",
    gap: "5px",
    gridTemplateColumns: "1fr 1fr",
  },
  tipButtonBox: {
    display: "grid",
    gap: "5px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
};
