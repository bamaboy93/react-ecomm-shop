import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
import { Price } from "./Item.styled";

export default function Item({ item }) {
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
    <Card sx={{ width: 280 }}>
      <CardMedia
        component="img"
        width="100%"
        height="360px"
        image={`http://localhost:1337${url}`}
        alt={name}
        onClick={() => navigate(`/item/${item.id}`)}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>{name}</Typography>
      </CardContent>
      <CardContent
        sx={{
          pt: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Price>$ {price}</Price>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
