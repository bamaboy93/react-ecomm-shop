import { Box, LinearProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        mt: "60px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <LinearProgress color="secondary" />
    </Box>
  );
}
