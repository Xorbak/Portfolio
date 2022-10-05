import Button from "@mui/material/Button";
import React from "react";
interface Props {
  setInspiration: (value: React.SetStateAction<number>) => void;
  inspirationValue: number;
  label: string;
}
export const InspirationButton = ({
  setInspiration,
  inspirationValue,
  label,
}: Props) => {
  return (
    <Button
      onClick={() => {
        {
          setInspiration(inspirationValue);
        }
      }}
    >
      {label}
    </Button>
  );
};
