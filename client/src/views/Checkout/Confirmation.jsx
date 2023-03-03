import { Box, Alert, AlertTitle } from "@mui/material";

export default function Confirmation() {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <b>You have successfully made an Order</b>
      </Alert>
    </Box>
  );
}
