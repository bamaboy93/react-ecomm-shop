import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Price } from "./Item.styled";

export default function Item({ item, width }) {
  const navigate = useNavigate();

  const { price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box>
        <img
          alt={name}
          width="280px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer", display: "block" }}
        />
        <Box
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        ></Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: 14 }}>{name}</Typography>
        <Price>$ {price}</Price>
      </Box>
    </Box>
  );
}
