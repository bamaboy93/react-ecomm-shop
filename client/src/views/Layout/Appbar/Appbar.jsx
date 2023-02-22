import { IconButton, Box } from "@mui/material";
import { MenuRounded, SearchOutlined, Person3 } from "@mui/icons-material";
import { Actions, Logo, NavBar, Wrapper } from "./Appbar.styled";
import Cart from "../../../components/Cart/Cart";

export default function Appbar() {
  return (
    <Wrapper>
      <NavBar>
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              color: "black",
              marginRight: { xs: 2, sm: 4, lg: 6 },
            }}
          >
            <MenuRounded fontSize="large" />
          </IconButton>
          <Logo to="/">STORE</Logo>
        </Box>
        <Actions>
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined fontSize="large" />
          </IconButton>

          <Cart />

          <IconButton sx={{ color: "black" }}>
            <Person3 fontSize="large" />
          </IconButton>
          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined fontSize="large" />
          </IconButton> */}
        </Actions>
      </NavBar>
    </Wrapper>
  );
}
