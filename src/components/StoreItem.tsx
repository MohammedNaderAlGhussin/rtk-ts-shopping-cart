import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  decreaseProductQuntity,
  deleteProduct,
  increaseProductQuntity,
} from "../redux/slices/cartSlice";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(
    (state) => state.cart.cart.find((item) => item.id === id)?.quantity || 0
  );

  const onIncreaseHandler = () => {
    dispatch(
      increaseProductQuntity({
        id,
        name,
        price,
        imgUrl,
        quantity,
      })
    );
  };
  const onDecreaseHandler = () => {
    dispatch(decreaseProductQuntity({ id: id, quantity: quantity }));
  };
  const onDeleteHandler = () => {
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <Card sx={{ minWidth: { xs: "300px", sm: "400px" }, height: 430 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ height: 250, maxWidth: 400 }}
        image={imgUrl}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" component="span" color="text.secondary">
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        {quantity > 0 ? (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            m="auto"
            gap={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={4}
            >
              <Button onClick={onDecreaseHandler} variant="contained">
                <Typography fontSize={18}>-</Typography>
              </Button>
              <Typography fontSize={20}>{quantity}</Typography>
              <Button onClick={onIncreaseHandler} variant="contained">
                <Typography fontSize={18}>+</Typography>
              </Button>
            </Stack>
            <Stack>
              <Button
                onClick={onDeleteHandler}
                color="error"
                variant="contained"
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Button
            onClick={onIncreaseHandler}
            sx={{ margin: "30px auto 0px" }}
            variant="contained"
            size="medium"
          >
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default StoreItem;
