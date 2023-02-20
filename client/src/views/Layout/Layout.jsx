import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Appbar from "./Appbar/Appbar";

export default function Layout() {
  return (
    <Box margin="auto">
      <Appbar />

      <Outlet />
    </Box>
  );
}
