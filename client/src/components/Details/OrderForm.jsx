import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import { addToCart } from "../../redux/actions";

export default function OrderForm({ item }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ mb: 3, width: 1 }}>
        <InputLabel id="select">Size</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={size}
          label="Size"
          onChange={handleChangeSize}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"xs"}>XS</MenuItem>
          <MenuItem value={"s"}>S</MenuItem>
          <MenuItem value={"m"}>M</MenuItem>
          <MenuItem value={"l"}>L</MenuItem>
          <MenuItem value={"xl"}>XL</MenuItem>
        </Select>
      </FormControl>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" mr="20px" p="2px 5px">
          <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
            <Remove />
          </IconButton>
          <Typography sx={{ p: "0 5px" }}>{count}</Typography>
          <IconButton onClick={() => setCount(count + 1)}>
            <Add />
          </IconButton>
        </Box>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            padding: "10px 40px",
          }}
          onClick={() =>
            dispatch(addToCart({ item: { ...item, count, size } }))
          }
        >
          ADD TO CART
        </Button>
      </Box>
    </>
  );
}
