import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentView: 'productType',
  selectedProductType: null,
  selectedItemType: null,
  selectedSeries: null,
  selectedModel: null,
  itemTypes: [],
  loading: false,
  error: null
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    setSelectedProductType: (state, action) => {
      state.selectedProductType = action.payload;
      state.selectedItemType = null;
      state.selectedSeries = null;
    },
    setSelectedItemType: (state, action) => {
      state.selectedItemType = action.payload;
      state.selectedSeries = null;
    },
    setSelectedSeries: (state, action) => {
      state.selectedSeries = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setItemTypes: (state, action) => {
      state.itemTypes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setCurrentView,
  setSelectedProductType,
  setSelectedItemType,
  setSelectedSeries,
  setSelectedModel,
  setItemTypes,
  setLoading,
  setError
} = catalogSlice.actions;

export default catalogSlice.reducer; 