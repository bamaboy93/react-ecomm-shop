import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Badge,
  Drawer,
  IconButton,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { ShoppingBagOutlined, Close, Remove, Add } from "@mui/icons-material";
import { CartBox, Header, Wrapper } from "./Cart.styled";
import { selectCart } from "../../redux/selectors";
import {
  removeFromCart,
  decreaseCount,
  increaseCount,
} from "../../redux/actions";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <>
      <Badge
        badgeContent={cart.length}
        color="secondary"
        invisible={cart.length === 0}
        sx={{
          "& .MuiBadge-badge": {
            top: 5,
          },
        }}
      >
        <IconButton
          onClick={toggleDrawer()}
          sx={{ color: "primary.light", p: 0 }}
        >
          <ShoppingBagOutlined fontSize="large" />
        </IconButton>
      </Badge>
      <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
        <CartBox>
          <Header>
            <Typography variant="h3">SHOPPING BAG</Typography>
            <IconButton onClick={toggleDrawer()}>
              <Close />
            </IconButton>
          </Header>
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <Wrapper>
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <Wrapper>
                      <Box>
                        <Typography fontWeight="bold" mb="10px">
                          {item.attributes.name}
                        </Typography>
                        <Typography fontWeight="bold">
                          Size: {item.size}
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <Close />
                      </IconButton>
                    </Wrapper>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    <Wrapper>
                      <Box display="flex" alignItems="center">
                        <IconButton
                          color="secondary"
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <Remove />
                        </IconButton>
                        <Typography fontWeight="bold">{item.count}</Typography>
                        <IconButton
                          color="secondary"
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <Add />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        $ {item.attributes.price}
                      </Typography>
                    </Wrapper>
                  </Box>
                </Wrapper>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <Wrapper>
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold" sx={{ mr: 1 }}>
                $ {totalPrice}
              </Typography>
            </Wrapper>
            <Button
              sx={{
                backgroundColor: "secondary.light",
                color: "primary.main",
                fontWeight: "bold",
                minWidth: "100%",
                padding: "20px 0",
                marginTop: 3,
              }}
              onClick={() => {
                navigate("/checkout");
                setOpen(false);
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </CartBox>
      </Drawer>
    </>
  );
}
