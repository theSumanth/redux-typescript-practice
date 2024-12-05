import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const exisitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exisitingItemIndex >= 0) {
        state.items[exisitingItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const exisitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const presentQuantity = state.items[exisitingItemIndex].quantity;
      if (presentQuantity === 1) {
        state.items.splice(exisitingItemIndex, 1);
      } else {
        state.items[exisitingItemIndex].quantity--;
      }
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
