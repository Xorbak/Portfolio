import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Quotes, QuoteVisibility } from "../InspirationalQuote";
import { InspirationButton } from "./inspirationButton";
import { Inspirationline } from "./inspirationLine";
interface Props {
  setQuote: React.Dispatch<React.SetStateAction<Quotes | null | undefined>>;
  getQuote: (url: string) => Promise<void>;
  quoteAPI: string;
  setWindow: React.Dispatch<React.SetStateAction<QuoteVisibility>>;
}
export const InspireMe = ({
  setQuote,
  getQuote,
  quoteAPI,
  setWindow,
}: Props) => {
  const [inspiration, setInspiration] = useState<number>(6);

  return (
    <Box>
      <Inspirationline inspiration={inspiration} />

      {inspiration == 1 ? (
        <InspirationButton
          setInspiration={setInspiration}
          inspirationValue={6}
          label={"calm me down please"}
        />
      ) : (
        <InspirationButton
          setInspiration={setInspiration}
          inspirationValue={inspiration - 1}
          label={"inspire me!"}
        />
      )}
      <Button
        onClick={() => {
          setQuote(null),
            setWindow((i) => ({ ...i, box: false })),
            getQuote(quoteAPI);
        }}
      >
        Show me a quote
      </Button>
    </Box>
  );
};
