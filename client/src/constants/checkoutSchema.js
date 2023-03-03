import * as yup from "yup";

export const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "This field can contain only Latin letters")
        .required("required"),
      lastName: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "This field can contain only Latin letters")
        .required("required"),
      country: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "This field can contain only Latin letters")
        .required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "This field can contain only Latin letters")
        .required("required"),
      state: yup
        .string()
        .matches(/^[aA-zZ\s]+$/, "This field can contain only Latin letters")
        .required("required"),
      zipCode: yup
        .string()
        .matches(/^\d+$/, "This field can contain only numbers")
        .required("required"),
    }),
  }),
  yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid! example: user@mail.com")
      .required("required"),
    phoneNumber: yup
      .string()
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Phone number is not valid!"
      )
      .required("required"),
  }),
];
