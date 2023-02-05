import * as yup from "yup";

export const imageValidation = yup.object().shape({
  prompt: yup
    .string()
    .min(2, "You cant have an empty search")
    .required("You cant have an empty search"),
});
