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
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
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
          <Typography>Careers</Typography>
          <Typography>Our Stores</Typography>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Stack>

        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold">
            Customer Care
          </Typography>
          <ActionLink herf="/">Track Your Order</ActionLink>
          <ActionLink herf="#">Corporate & Bulk Purchasing</ActionLink>
          <ActionLink herf="#">Returns & Refunds</ActionLink>
          <ActionLink herf="#">Help Center</ActionLink>
        </Stack>

        <Stack spacing={3}>
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography>50 Blvd, Washington, DC 10501</Typography>
          <Typography sx={{ wordWrap: "break-word" }}>
            mail@gmail.com
          </Typography>
          <Typography>(222)333-4444</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

const ActionLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  marginBottom: "30px",

  color: `${theme.palette.secondary.main}`,
}));
