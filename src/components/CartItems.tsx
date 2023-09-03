import { Button, Menu, Modal, Stack, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "../redux/store";
import { formatCurrency } from "../utilities/formatCurrency";

const CartItems = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);

  const totalPrice = cart.reduce((acc, produt) => {
    return (acc += produt.price * produt.quantity);
  }, 0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {cart.length > 0 && (
        <div>
          <div
            onClick={handleOpen}
            className="bg-white border-[1px] border-blue-500 mr-3 p-2 rounded-full cursor-pointer group duration-300 hover:bg-blue-500 hover:text-white relative"
          >
            <ShoppingCart className="text-[18px] text-blue-500 duration-300 group-hover:text-white" />
            <span className=" absolute translate-x-[60%] translate-y-[-25%] flex flex-row justify-center items-center bg-red-500 text-white rounded-full w-5 h-5">
              {cart.length}
            </span>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Menu
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Stack
                sx={{ minWidth: 600 }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={1.5}
              >
                <Typography variant="h6"> CART</Typography>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    width: "fit-content",
                    transition: "0.4",
                    "&:hover": {
                      background: "black",
                      color: "white",
                    },
                  }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </Button>
              </Stack>
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
              <Stack direction="row" justifyContent="flex-end" p={1.5}>
                <Typography variant="h5" component="p">
                  Total Price: {formatCurrency(totalPrice)}
                </Typography>
              </Stack>
            </Menu>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default CartItems;
