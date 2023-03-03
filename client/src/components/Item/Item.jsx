import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Skeleton,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
import { Price } from "./Item.styled";

export default function Item({ item, isLoading }) {
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
    <>
      {isLoading ? (
        <Skeleton variant="rounded" width={280} height={400} />
      ) : (
        <Card>
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image={`http://localhost:1337${url}`}
            alt={name}
            onClick={() => navigate(`/item/${item.id}`)}
            sx={{ cursor: "pointer", height: 350 }}
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
      )}
    </>
  );
}
