import { Box, Typography } from "@mui/material";
import Item from "../Item/Item";

export default function RelatedItmes({ items }) {
  return (
    <Box mt="50px" width="100%">
      <Typography variant="h3" fontWeight="bold">
        We recommend
      </Typography>
      {items && (
        <Box
          sx={{
            margin: "0 auto",
            mt: 4,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 280px)",
            justifyContent: "space-around",
            rowGap: "25px",
            columnGap: "10px",
          }}
        >
          {items.data.slice(5, 9).map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
}
