import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
interface Props {
  title: string;
  body: string;
  caption: string;
}
export const Biography = ({ title, body, caption }: Props) => {
  return (
    <Box // biography container
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={styles.borderLine}></Typography>
      <Box
        //start of biography
        sx={styles.biographyContainer}
      >
        <Typography
          sx={{
            display: "flex",
            textAlign: "start",
            alignItems: "start",
            justifyContent: "start",
            marginBottom: "10px",
          }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <Typography sx={{ marginTop: "10px" }} variant="caption">
          {caption}
        </Typography>
      </Box>
      <Typography
        // biography ends here
        sx={styles.borderLine}
      ></Typography>
    </Box>
  );
};

const styles = {
  borderLine: {
    borderBottom: "1px solid",
    borderColor: "primary.main",
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20%",
  },

  biographyContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    alignItems: "start",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
