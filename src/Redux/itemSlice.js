import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const itemsSlice = createSlice({
  name: 'items',
  initialState: { data: [], loading: false, error: null, query: '', currentPage: 1, itemsPerPage: 5 },
  reducers: {
    setItems: (state, action) => { state.data = action.payload; },
    addItem: (state, action) => { state.data.push(action.payload); },
    updateItem: (state, action) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) state.data[index] = action.payload;
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    setQuery: (state, action) => { state.query = action.payload; },
    setCurrentPage: (state, action) => { state.currentPage = action.payload; },
    setLoading: (state, action) => { state.loading = action.payload; },
  },
});

export const { setItems, addItem, updateItem, deleteItem, setQuery, setCurrentPage, setLoading } = itemsSlice.actions;
export default itemsSlice.reducer;
