import { Box, Typography } from "@mui/material";
import OrderForm from "./OrderForm";
import Panels from "./Panels";
import RelatedItmes from "./RelatedItems";

export default function Details({ item }) {
  return (
    <Box width="80%" m="80px auto">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: { sm: "center" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: 1, sm: "340px", md: "450px" },
            mr: { sm: "28px", lg: 20 },
          }}
        >
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain", display: "block" }}
          />
        </Box>
        {/* Product Info */}
        <Box
          sx={{
            width: { xs: 1, sm: "246px", lg: "350px" },
            mt: { xs: 5, sm: 0 },
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {item?.attributes?.name}
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
      <RelatedItmes item={item} />
    </Box>
  );
}
