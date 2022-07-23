import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let stock = createSlice({
  name: 'stock',
  initialState: [10, 20, 30],
});

let cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      name: 'white and black',
      count: 2,
    },
    {
      id: 2,
      name: 'grey yordan',
      count: 1,
    },
  ],
  reducers: {
    addCount(state, action) {
      let findIndex = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[findIndex].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
