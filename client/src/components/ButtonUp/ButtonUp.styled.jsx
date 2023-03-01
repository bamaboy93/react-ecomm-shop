import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const ButtonToTop = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "40px",
  right: "40px",
  borderRadius: "50%",
  padding: 10,
  minWidth: 0,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  transition: "background-color 250ms ease-in",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },

  [theme.breakpoints.down("sm")]: {
    right: "10px",
    padding: 5,
  },
}));
