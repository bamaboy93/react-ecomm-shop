import { useEffect, useState } from "react";
import { IconButton, Box } from "@mui/material";
import { SearchOutlined, Person3 } from "@mui/icons-material";
import { Actions, Logo, NavBar, Wrapper } from "./Appbar.styled";

import Cart from "../../../components/Cart/Cart";
import Menu from "../../../components/Menu/Menu";

export default function Appbar() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Wrapper visible={visible ? visible.toString() : undefined}>
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
