import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
      // state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      }
    )},
    decreaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      }
    )},
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  toggleCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;