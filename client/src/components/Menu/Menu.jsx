import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Link,
  styled,
} from "@mui/material";
import { MenuRounded, Close } from "@mui/icons-material";

export default function Menu() {
  const [state, setState] = useState({
    left: false,
  });
  const anchor = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const items = [
    { name: "Dresses" },
    { name: "T-shits" },
    { name: "Jeans" },
    { name: "Jackets & Coats" },
    { name: "Hoodies & Sweatshirts" },
    { name: "Cardigans & Sweaters" },
    { name: "Skirts" },
  ];

  return (
    <>
      <IconButton
        sx={{
          color: "primary.light",
          marginRight: { xs: 2, sm: 4, lg: 6 },
        }}
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuRounded fontSize="large" />
      </IconButton>

      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{ width: 300 }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <Box p="20px" display="flex" justifyContent="space-between">
            <Stack spacing={2}>
              <Item sx={{ paddingTop: "6px" }} href="#">
                New Arrivals
              </Item>
              <Item href="#">Top Rated</Item>
              <Item href="#">Bestsellers</Item>
            </Stack>
            <IconButton
              sx={{ alignSelf: "flex-start" }}
              onClick={toggleDrawer(state.anchor, false)}
            >
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {items.map(({ name }) => (
              <ListItem sx={{ fontSize: 16 }} key={name} disablePadding>
                <ListItemButton>
                  <ListItemText disableTypography={true} primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

const Item = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  fontSize: 18,
  "&:hover": {
    textDecoration: "underline",
  },
}));
