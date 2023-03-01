import { Box, Pagination } from "@mui/material";

export default function MainPagination({ page, totalPages, handleChangePage }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        color="secondary"
      />
    </Box>
  );
}
