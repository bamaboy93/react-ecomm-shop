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
          mt="30px"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="20px"
        >
          {data.data.slice(5, 9).map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
}
