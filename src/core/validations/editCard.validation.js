import * as yup from "yup";

export const editCardSchema = yup.object().shape({
  title: yup.string(),
  shortDescription: yup.string(),
  mainDescription: yup.string(),
});
