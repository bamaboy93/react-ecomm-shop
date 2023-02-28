import { Snackbar, Alert } from "@mui/material";

export default function Notification({ message, handleClose }) {
  const { open, severity, text } = message;
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {text}
      </Alert>
    </Snackbar>
  );
}
