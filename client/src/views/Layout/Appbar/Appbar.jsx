import { IconButton, Box } from "@mui/material";
import { SearchOutlined, Person3 } from "@mui/icons-material";
import { Actions, Logo, NavBar, Wrapper } from "./Appbar.styled";
import Cart from "../../../components/Cart/Cart";
import Menu from "../../../components/Menu/Menu";

export default function Appbar() {
  return (
    <Wrapper>
      <NavBar>
        <Box display="flex" alignItems="center">
          <Menu />
          <Logo to="/">STORE</Logo>
        </Box>
        <Actions>
          <IconButton sx={{ color: "primary.light" }}>
            <SearchOutlined fontSize="large" />
          </IconButton>

          <Cart />

          <IconButton sx={{ color: "primary.light" }}>
            <Person3 fontSize="large" />
          </IconButton>
        </Actions>
      </NavBar>
    </Wrapper>
  );
}
