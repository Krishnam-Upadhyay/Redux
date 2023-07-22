import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from './../../components//cartItems';


const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState = {
  cartItem: [],
  amount: 5,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',()=>{
    const resp = fetch(url).then((resp)=> resp.json()).catch((err)=>console.log(err)):
    
  }
 
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
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
    calculateTotal: (state) => {
      let newamount = 0;
      let newtotal = 0;
      state.cartItem.forEach((item) => {
        newamount += item.amount;
        newtotal += item.amount * item.price;
      });
      state.amount = newamount;
      state.total = newtotal;
    },
  },
  exptraReducers: {
    [getCartItems.pending]: (state) => {
      console.log('Pending');
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      conosle.log(action);
      state.cartItem = action.payload;
      console.log('fullfilled');
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state) => {
      console.log('rejected');
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
// console.log(cartSlice);
export default cartSlice.reducer;
