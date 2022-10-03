import { Typography } from "@mui/material";
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
  return (
    <Box sx={styles.App}>
      <Box sx={styles.tipBox}>
        <TipData
          val={val}
          setVal={setVal}
          setTipData={setTipData}
          tipData={tipData}
        />
        {tipData ? <Typography sx={styles.borderLine}></Typography> : null}
        <Box sx={styles.tipOutput}>
          <Typography>
            {tipData ? "Bill : R" + (tipData.bill ? tipData.bill : 0) : null}
          </Typography>
          <Typography>
            {tipData ? "Tip : " + tipData.tip + "%" : null}
          </Typography>

          <Typography // add tip amount
          >
            {tipData ? "Total Due : R" + tipData.total : null}
          </Typography>
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
    paddingTop: "0.5%",
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
