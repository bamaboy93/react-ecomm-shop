import { Box, Typography, Link, styled, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="neutral.light">
      <Box
        width="77%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
      >
        <Box width="150px">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color="secondary.main"
          >
            STORE
          </Typography>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            neque dolore nemo at voluptatum. Commodi.
          </Box>
        </Box>

        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold">
            About Us
          </Typography>
          <Item href="#">Careers</Item>
          <Item href="#">Our Stores</Item>
          <Item href="#">Terms & Conditions</Item>
          <Item href="#">Privacy Policy</Item>
        </Stack>

        <Stack spacing={3} width="150px">
          <Typography variant="h4" fontWeight="bold">
            Customer Care
          </Typography>
          <Item href="#">Track Your Order</Item>
          <Item href="#">Corporate & Bulk Purchasing</Item>
          <Item href="#">Returns & Refunds</Item>
          <Item href="#">Help Center</Item>
        </Stack>

        <Stack spacing={3} width="122px">
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography>50 Blvd, Washington, DC 10501</Typography>
          <Item href="mailto:mail@gmail.com" sx={{ wordWrap: "break-word" }}>
            mail@gmail.com
          </Item>
          <Item href="tel:2223334444">(222)333-4444</Item>
        </Stack>
      </Box>
    </Box>
  );
}

const Item = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  transition: "color 250ms ease-in",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));
