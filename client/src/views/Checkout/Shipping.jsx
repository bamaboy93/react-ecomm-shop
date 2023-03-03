import { Box, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

export default function Shipping({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Customer Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
}
