import { Box, InputBase, Divider, Typography, Button } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="0 auto" textAlign="center">
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>and receive $20 coupon for your first order!</Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        backgroundColor="neutral.light"
        sx={{ width: { xs: "100%", sm: "65%" } }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button color="secondary">
          <MarkEmailReadOutlinedIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
}
