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
  return (
    <Box sx={styles.tipButtonBox}>
      <TipButton percentage={5} val={val} setVal={setVal} />
      <TipButton percentage={10} val={val} setVal={setVal} />
      <TipButton percentage={15} val={val} setVal={setVal} />
      <TipButton percentage={20} val={val} setVal={setVal} />
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
