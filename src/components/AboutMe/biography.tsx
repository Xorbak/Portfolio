import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
interface Props {
  title: string;
  titleContent: string;
  body: string;
  caption: string;
}
const Keyframes = styled("div")({
  "@keyframes pulsate": {
    from: {},
    to: {
      borderColor: "transparent",
    },
  },
  borderRight: "solid black 1px",
  animation: "pulsate 0.5s infinite ease",
  position: "absolute",
});

export const Biography = ({ title, titleContent, body, caption }: Props) => {
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
        <Grid
          sx={{
            display: "flex",
            textAlign: "start",
            alignItems: "start",
            justifyContent: "start",
            marginBottom: "10px",
          }}
          flexDirection="row"
        >
          <Typography component={"div"} variant="h3">
            {`${title}`}{" "}
            <Typography display={"inline"} variant="h3" sx={styles.flash}>
              {` ${titleContent}`}
            </Typography>
          </Typography>

          <Keyframes />
        </Grid>{" "}
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
  "@keyframes pulsate": {
    from: { borderColor: "white" },
    to: {
      borderColor: "transparent",
      opacity: 1,
    },
  },

  flash: {
    borderRight: "solid 3px",

    animation: "pulsate 0.75s infinite ease",
  },
  borderLine: {
    borderBottom: "1px solid",
    borderColor: "primary.main",
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20%",
    boxShadow: 5,
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
