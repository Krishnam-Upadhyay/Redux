import { createSlice } from '@reduxjs/toolkit';
import cartItems from './../../components//cartItems';

const initialState = {
  cartItem: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItem = state.cartItem.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, { payload }) => {
      const Item = state.cartItem.find((item) => {
        return item.id === payload.id;
      });
      Item.amount = Item.amount + 1;
    },
    decrease: (state, { payload }) => {
      const Item = state.cartItem.find((item) => {
        return item.id === payload.id;
      });
      Item.amount = Item.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
// console.log(cartSlice);
export default cartSlice.reducer;
