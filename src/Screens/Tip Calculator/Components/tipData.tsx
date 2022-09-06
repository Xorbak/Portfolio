import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { billInput } from "./billInput";

import { Tip } from "../TipCalc";
import { tipInput } from "./tipInput";
import { TipPercentageButton } from "./tipPercentageButton";

interface Props {
  setTipData: React.Dispatch<React.SetStateAction<Tip | undefined>>;
  tipData: Tip | undefined;
  val: null;
  setVal: React.Dispatch<React.SetStateAction<null>>;
}

export const TipData = ({ setTipData, tipData, val, setVal }: Props) => {
  return (
    <Box>
      <Formik<Tip>
        initialValues={{ bill: null, tip: null, total: null }}
        onSubmit={(values) => {
          //all three need to check if its null, otherwise it freaks out, then it needs to change to the correct value
          let tip = values.tip !== null ? values.tip : Number(val);
          let bill = values.bill !== null ? values.bill : 0;
          let total = bill + bill * (tip / 100);
          setTipData({ bill, tip, total });
        }}
      >
        <Form>
          <Box sx={styles.inputBox}>
            <Field fullWidth name="bill" component={billInput} />
            <Field
              onChange={(e: any) => {
                setVal(e.target.value);
              }}
              value={val}
              name="tip"
              component={tipInput}
            />
          </Box>

          <Box>
            <TipPercentageButton
              setTipData={setTipData}
              val={val}
              setVal={setVal}
            />
          </Box>

          <Button type="submit">Calculate tip</Button>
        </Form>
      </Formik>
    </Box>
  );
};

const styles = {
  inputBox: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "0.5fr 0.41fr",
    gap: "5px",
    width: "100%",
    fontSize: "small",
    margin: "10px",
  },
};
