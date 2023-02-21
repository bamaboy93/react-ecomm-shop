import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Cart() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    anchor: "right",
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Badge
        // badgeContent={cart.length}
        color="secondary"
        // invisible={cart.length === 0}
      >
        <IconButton
          onClick={toggleDrawer(state.anchor, true)}
          sx={{ color: "black", p: 0 }}
        >
          <ShoppingBagOutlined fontSize="large" />
        </IconButton>
      </Badge>
      <Drawer
        anchor={state.anchor}
        open={state[state.anchor]}
        onClose={toggleDrawer(state.anchor, false)}
      >
        <CartBox>
          <Header>
            <Typography variant="h3">SHOPPING BAG</Typography>
            <IconButton onClick={toggleDrawer(state.anchor, false)}>
              <Close />
            </IconButton>
          </Header>
          <Box>
            {[1, 2, 3].map((item) => (
              <Box key={1}>
                <Wrapper>
                  <Box flex="1 1 40%">
                    {/* <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`http://localhost:2000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    /> */}
                  </Box>
                  <Box flex="1 1 60%">
                    <Wrapper>
                      <Typography fontWeight="bold">
                        {/* {item.attributes.name} */}
                      </Typography>
                      <IconButton
                      // onClick={() =>
                      //   dispatch(removeFromCart({ id: item.id }))
                      // }
                      >
                        <Close />
                      </IconButton>
                    </Wrapper>
                    {/* <Typography>{item.attributes.shortDescription}</Typography> */}
                    <Wrapper>
                      <Box
                        display="flex"
                        alignItems="center"
                        border="1.5px solid red"
                      >
                        <IconButton
                        //   onClick={() =>
                        //     dispatch(decreaseCount({ id: item.id }))
                        //   }
                        >
                          <Remove />
                        </IconButton>
                        <Typography>1</Typography>
                        <IconButton
                        //   onClick={() =>
                        //     dispatch(increaseCount({ id: item.id }))
                        //   }
                        >
                          <Add />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        {/* ${item.attributes.price} */}
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
              <Typography fontWeight="bold">$20</Typography>
            </Wrapper>
            <Button
              sx={{
                backgroundColor: "grey",
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
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
