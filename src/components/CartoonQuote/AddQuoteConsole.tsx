import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Field, Form, Formik } from "formik";
import React from "react";
import { QuoteInput } from "./quoteInput";
interface CartoonQuote {
  quote: string;
  name: string;
  cartoon: string;
}
interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddQuoteConsole = ({ setModal }: Props) => {
  return (
    <Box sx={styles.App}>
      <Formik<CartoonQuote>
        initialValues={{ quote: "", name: "", cartoon: "" }}
        onSubmit={(values, { resetForm }) => {
          fetch("https://krat.es/6685b8328aa899faddec/cartoonQuotes", {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
              quote: values.quote,
              name: values.name,
              cartoon: values.cartoon,
            }),
          }),
            resetForm();
        }}
      >
        {() => {
          return (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Form style={{ width: "100%", paddingTop: "3%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "background.paper",
                    borderRadius: "5px",
                  }}
                  boxShadow={5}
                >
                  <Typography
                    variant="h4"
                    sx={{ margin: "20px", marginX: "30px" }}
                  >
                    Add your own cartoon quote
                  </Typography>
                  <Field
                    name="quote"
                    label="Quote"
                    component={QuoteInput}
                    multiline
                  />
                  <Field name="name" label="Name" component={QuoteInput} />
                  <Field
                    name="cartoon"
                    label="Cartoon"
                    component={QuoteInput}
                  />
                </Box>
                <Button type="submit">Submit</Button>
              </Form>
              <Button onClick={() => setModal(true)}>Back</Button>
            </Box>
          );
        }}
      </Formik>
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
    color: "white",
  },
};
