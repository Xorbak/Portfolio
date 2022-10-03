import Box from "@mui/material/Box";
import React from "react";

interface Props {
  image: string;
}

export const ImageRound = ({ image }: Props) => {
  return (
    <Box
      component="img"
      src={image} //image placeholder
      sx={styles.image}
    />
  );
};

const styles = {
  image: {
    boxShadow: 3,
    height: "200px",
    width: "200px",
    borderRadius: "300px",
  },
};
