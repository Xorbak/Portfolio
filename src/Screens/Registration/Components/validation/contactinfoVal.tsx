import * as yup from "yup";

const contactinfoVal = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Please enter an Email"),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(9, "Must be exactly 10 digits")
    .max(9, "Must be exactly 10 digits"),

  postalAddress: yup.string(),
});
export default contactinfoVal;
