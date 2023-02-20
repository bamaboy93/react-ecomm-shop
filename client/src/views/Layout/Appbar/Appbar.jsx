// import { useDispatch, useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Actions, Logo, NavBar, Wrapper } from "./Appbar.styled";

export default function Appbar() {
  return (
    <Wrapper>
      <NavBar>
        <Logo to="/">STORE</Logo>
        <Actions>
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined fontSize="large" />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline fontSize="large" />
          </IconButton>
          <Badge
            // badgeContent={cart.length}
            color="secondary"
            // invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              //   onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined fontSize="large" />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined fontSize="large" />
          </IconButton>
        </Actions>
      </NavBar>
    </Wrapper>
  );
}
