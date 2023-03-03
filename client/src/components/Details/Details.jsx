import { Box, Typography, Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import OrderForm from "./OrderForm";
import Panels from "./Panels";
import RelatedItmes from "./RelatedItems";
import ImageSwiper from "./ImageSwiper";

export default function Details({ item, items }) {
  return (
    <Box width="90%" m="70px auto">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "space-between", lg: "start" },
        }}
      >
        <Box
          sx={{
            width: { xs: 1, sm: 340, md: 450 },
            height: 1,
            mr: { lg: 20 },
          }}
        >
          <ImageSwiper item={item} />
        </Box>
        <Box
          sx={{
            width: { xs: 1, sm: 250, md: 350, lg: 450 },
            mt: { xs: 5, sm: 10, lg: 20 },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {item?.attributes?.name}
              </Typography>
              <Checkbox
                color="secondary"
                icon={<FavoriteBorder fontSize="large" />}
                checkedIcon={<Favorite fontSize="large" />}
              />
            </Box>
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              {item?.attributes?.shortDescr}
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "bold", mb: 3 }}>
              ${item?.attributes?.price}
            </Typography>
          </Box>

          {/* Form */}
          <OrderForm item={item} />
        </Box>
      </Box>

      {/* Tabs */}
      <Panels item={item} />

      {/* Related Items */}
      <RelatedItmes item={item} items={items} />
    </Box>
  );
}
