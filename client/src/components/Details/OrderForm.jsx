import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { selectCart } from "../../redux/selectors";
import { addToCart } from "../../redux/actions";
import Notification from "../Notifiaction/Notification";

export default function OrderForm({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const [message, setMessage] = useState({
    open: false,
    severity: "success",
    text: "",
  });
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  const handleAddItem = (value) => {
    const id = cart.map((product) => product.id);
    if (id.includes(value.item.id)) {
      setMessage((message) => ({
        ...message,
        open: true,
        severity: "error",
        text: "Item has already been added to the cart!",
      }));
      return;
    }
    dispatch(addToCart(value));
    setMessage((message) => ({
      ...message,
      open: true,

      text: "Item successfully added to cart!",
    }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage((message) => ({
      ...message,
      open: false,
      text: "",
    }));
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
          <IconButton
            color="secondary"
            onClick={() => setCount(Math.max(count - 1, 0))}
          >
            <Remove />
          </IconButton>
          <Typography sx={{ p: "0 5px" }}>{count}</Typography>
          <IconButton color="secondary" onClick={() => setCount(count + 1)}>
            <Add />
          </IconButton>
        </Box>
        <Button
          color="secondary"
          variant="contained"
          sx={{
            padding: "10px 40px",
          }}
          onClick={() => handleAddItem({ item: { ...item, count, size } })}
        >
          ADD TO CART
        </Button>
      </Box>
      <Notification message={message} handleClose={handleClose} />
    </>
  );
}
