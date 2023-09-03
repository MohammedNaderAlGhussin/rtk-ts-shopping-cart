import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const items: Cart[] =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [];

const saveDataToLS = (items: Cart[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

type Cart = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

type CartList = {
  cart: Cart[];
};

const initialState: CartList = {
  cart: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItemQuantity: (state, action: PayloadAction<{ id: number }>) => {
      state.cart.find((item) => item.id === action.payload.id)?.quantity || 0;
    },
    increaseProductQuntity: (state, action: PayloadAction<Cart>) => {
      const foundProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        const productClone = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(productClone);
      }
      saveDataToLS(state.cart);
    },
    decreaseProductQuntity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const foundProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (foundProduct) {
        if (foundProduct.quantity > 1) {
          foundProduct.quantity -= 1;
        } else {
          const newCart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          state.cart = newCart;
        }
      }
      saveDataToLS(state.cart);
    },
    deleteProduct: (state, action: PayloadAction<{ id: number }>) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      saveDataToLS(state.cart);
    },
  },
});

export default cartSlice.reducer;
export const {
  increaseProductQuntity,
  decreaseProductQuntity,
  deleteProduct,
  getItemQuantity,
} = cartSlice.actions;
