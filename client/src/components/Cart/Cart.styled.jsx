import { Box } from "@mui/material";

import { styled } from "@mui/system";

export const CartBox = styled(Box)({
  width: "40vw",
  height: "100%",
  overflow: "auto",
  padding: 32,
});

export const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 15,
});

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "15px 0",
});
