import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Wrapper } from "./MainCarousel.styled";

export default function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();

  return (
    <Box sx={{ width: 1, height: "100vh" }}>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": `${theme.palette.secondary.light}`,
          "--swiper-navigation-size": "50px",
        }}
      >
        {Object.values(heroTextureImports).map((texture, index) => (
          <SwiperSlide key={index}>
            <img src={texture} alt={`carousel-${index}`} />
            <Wrapper
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography sx={{ color: "secondary.light" }}>
                NEW ITEMS
              </Typography>
              <Typography variant="h1">Summer Sale</Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "secondary.light",
                  fontWeight: "bold",
                }}
              >
                Discover More
              </Typography>
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
