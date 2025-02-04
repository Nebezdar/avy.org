import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (query) => {
    const response = await api.search(query);
    return response.data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: [],
    loading: false,
    error: null,
    history: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    addToHistory: (state, action) => {
      if (!state.history.includes(action.payload)) {
        state.history = [action.payload, ...state.history].slice(0, 10);
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuery, addToHistory, clearHistory } = searchSlice.actions;
export default searchSlice.reducer; 