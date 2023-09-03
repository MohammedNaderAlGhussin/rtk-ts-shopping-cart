import { Box, Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { formatCurrency } from "../utilities/formatCurrency";
import { useAppDispatch } from "../redux/store";
import { deleteProduct } from "../redux/slices/cartSlice";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};
const CartItem = ({ id, name, price, imgUrl, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <Stack p={1.5} direction="column">
      <Stack
        direction="row"
        bgcolor="#f6f6f6"
        p={1.8}
        borderRadius={2.5}
        alignItems="center"
        justifyContent="space-between"
        gap={2.5}
      >
        <Stack
          direction="row"
          justifyItems="center"
          alignItems="center"
          gap={2}
        >
          <Box>
            <img className="w-[90px] h-[90px] object-cover" src={imgUrl} />
          </Box>
          <Stack direction="column" gap={1}>
            <Typography variant="body1" component="p">
              {name} x{quantity}
            </Typography>
            <Typography color="#777" variant="body1" component="span">
              {formatCurrency(price)}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="body1" component="p">
            {formatCurrency(price * quantity)}
          </Typography>
          <Button
            onClick={() => dispatch(deleteProduct({ id: id }))}
            sx={{
              color: "red",
              border: "1px solid red",
              width: "fit-content",
              transition: "0.4",
              "&:hover": {
                background: "red",
                color: "white",
              },
            }}
          >
            <CloseIcon />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartItem;
