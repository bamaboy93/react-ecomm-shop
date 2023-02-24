import { Box, Typography } from "@mui/material";
import { useGetItemsQuery } from "../../redux/items-slice";
import Item from "../Item/Item";

export default function RelatedItmes() {
  const { data } = useGetItemsQuery();

  return (
    <Box mt="50px" width="100%">
      <Typography variant="h3" fontWeight="bold">
        We recommend
      </Typography>
      {data && (
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {data.data.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
}
