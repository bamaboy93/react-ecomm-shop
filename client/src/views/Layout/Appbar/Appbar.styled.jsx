import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ visible }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  backgroundColor: "rgba(255, 255, 255, 0.80)",
  color: "black",
  position: "fixed",
  top: visible ? "0" : "-60px",
  left: "0",
  zIndex: "99",
  transition: "top 0.4s ease-out",
}));

export const NavBar = styled(Box)({
  width: "90%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Actions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  columnGap: "20px",
  zIndex: "2",
});

export const Logo = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  fontSize: 22,
}));
