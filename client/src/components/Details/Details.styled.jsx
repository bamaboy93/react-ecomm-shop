import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const MainWrapper = styled(Box)({
  width: "90%",
  margin: "70px auto",
});

export const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "start",
  },
}));

export const ImageSwiperWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "340px",
  },
  [theme.breakpoints.up("md")]: {
    width: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    marginRight: theme.spacing(20),
  },
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(5),

  [theme.breakpoints.up("sm")]: {
    width: "250px",
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.up("md")]: {
    width: "350px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "450px",
    marginTop: theme.spacing(20),
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));
