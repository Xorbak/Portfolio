import Box from "@mui/material/Box";
import React, { useState } from "react";
import { TipData } from "./Components/tipData";

export interface Tip {
  bill: number | null;
  tip: number | null;
  total: number | null;
}

export const TipCalc = () => {
  const [tipData, setTipData] = useState<Tip>();
  const [val, setVal] = useState(null);
  console.log("this is in the main screen tipdata state", tipData);
  console.log("this is in the main screen value state", val);
  console.log("-------------------------------------------");
  return (
    <Box sx={styles.App}>
      <Box sx={styles.tipBox}>
        <TipData
          val={val}
          setVal={setVal}
          setTipData={setTipData}
          tipData={tipData}
        />
        {tipData != null ? <Box sx={styles.borderLine}></Box> : null}
        <Box sx={styles.tipOutput}>
          <Box>
            {tipData !== undefined
              ? "Bill : R" + (tipData.bill != null ? tipData.bill : 0)
              : null}
          </Box>
          <Box>
            {tipData !== undefined ? "Tip : " + tipData.tip + "%" : null}
          </Box>
          <Box>
            {tipData !== undefined ? "Total Due : R" + tipData.total : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  tipBox: {
    backgroundColor: "background.paper",
    width: "300px",
    borderRadius: "5px",
  },
  tipOutput: {
    fontSize: "small",
    color: "primary.main",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    margin: "10px",
  },
  borderLine: {
    borderBottom: "1px solid",
    borderColor: "primary.main",
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20%",
  },
};
