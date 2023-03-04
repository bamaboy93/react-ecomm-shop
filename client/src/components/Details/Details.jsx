import { Box, Typography, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import OrderForm from "./OrderForm";
import Panels from "./Panels";
import RelatedItmes from "./RelatedItems";
import ImageSwiper from "./ImageSwiper";
import {
  ImageSwiperWrapper,
  ImageWrapper,
  InfoWrapper,
  MainWrapper,
  TitleWrapper,
} from "./Details.styled";

export default function Details({ item, items }) {
  return (
    <MainWrapper>
      <ImageWrapper>
        <ImageSwiperWrapper>
          <ImageSwiper item={item} />
        </ImageSwiperWrapper>
        <InfoWrapper>
          <Box>
            <TitleWrapper>
              <Typography variant="h3" fontWeight="bold">
                {item?.attributes?.name}
              </Typography>
              <Checkbox
                color="secondary"
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={<Favorite fontSize="large" />}
              />
            </TitleWrapper>
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              {item?.attributes?.shortDescr}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "bold", mb: 3 }}>
              $ {item?.attributes?.price}
            </Typography>
          </Box>

          {/* Form */}
          <OrderForm item={item} />
        </InfoWrapper>
      </ImageWrapper>

      {/* Tabs */}
      <Panels item={item} />

      {/* Related Items */}
      <RelatedItmes item={item} items={items} />
    </MainWrapper>
  );
}
