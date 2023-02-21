import { Box } from "@mui/material";
// import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

// export const Logo = styled(NavLink)(({ theme }) => ({
//   textDecoration: "none",
//   color: theme.palette.secondary.main,
//   fontSize: 22,
// }));

export const CartBox = styled(Box)({
  width: "500px",
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
  marginBottom: 15,
});
