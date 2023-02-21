import { IconButton } from "@mui/material";
import {
  PersonOutline,
  // MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Actions, Logo, NavBar, Wrapper } from "./Appbar.styled";
import Cart from "../../../components/Cart/Cart";

export default function Appbar() {
  return (
    <Wrapper>
      <NavBar>
        <Logo to="/">STORE</Logo>
        <Actions>
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined fontSize="large" />
          </IconButton>

          <Cart />

          <IconButton sx={{ color: "black" }}>
            <PersonOutline fontSize="large" />
          </IconButton>
          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined fontSize="large" />
          </IconButton> */}
        </Actions>
      </NavBar>
    </Wrapper>
  );
}
