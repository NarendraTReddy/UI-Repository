import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './Redux/itemSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
