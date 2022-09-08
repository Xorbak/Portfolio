export const errorSuccess = (focusItem: any, validation: any, touched: any) => {
  return focusItem && touched
    ? validation
      ? //make sure the error and success stylesheets are in the component you want to use it
        styles.errorState
      : styles.successState
    : null;
};

const styles = {
  successState: {
    fieldset: {
      borderColor: "success.main",
      borderWidth: "2px",
    },
    label: { color: "success.main", fontWeight: "100px" },
  },
  errorState: {
    P: { color: "error.main", fontSize: "small" },
    label: { color: "error.main", fontWeight: "bolder" },
    fieldset: { borderColor: "error.main", borderWidth: "2px" },
  },
};
