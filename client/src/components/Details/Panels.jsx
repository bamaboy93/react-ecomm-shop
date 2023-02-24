import { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";

export default function Panels({ item }) {
  const [value, setValue] = useState("description");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ mb: 3, mt: 5 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <Typography sx={{ fontSize: 14 }}>
            {item?.attributes?.longDescr}
          </Typography>
        )}
        {value === "reviews" && (
          <Typography sx={{ fontSize: 14 }}>
            There are no reviews for this product yet.
          </Typography>
        )}
      </Box>
    </>
  );
}
