import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const Wrapper = styled(Box)({
  color: "white",
  padding: 20,
  borderRadius: 1,
  textAlign: "left",
  backgroundColor: "rgb(0, 0, 0, 0.4)",
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
});
