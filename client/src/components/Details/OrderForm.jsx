import { useState, forwardRef } from "react";
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

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Remove, Add } from "@mui/icons-material";
import { addToCart } from "../../redux/actions";

export default function OrderForm({ item }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  const add = (value) => {
    dispatch(addToCart(value));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
          <MenuItem value={"XS"}>XS</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
          <MenuItem value={"M"}>M</MenuItem>
          <MenuItem value={"L"}>L</MenuItem>
          <MenuItem value={"XL"}>XL</MenuItem>
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
          onClick={() => add({ item: { ...item, count, size } })}
        >
          ADD TO CART
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item successfully added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
