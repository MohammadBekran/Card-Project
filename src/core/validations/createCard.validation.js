import * as yup from "yup";

export const createCardSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  shortDescription: yup.string().required("ShortDescription is required."),
  mainDescription: yup.string().required("MainDescription is required."),
});
