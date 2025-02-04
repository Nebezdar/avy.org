import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const fetchCatalogItems = createAsyncThunk(
  'catalog/fetchItems',
  async ({ type, category, series, page = 1 }) => {
    const response = await api.getCatalog({ type, category, series, page });
    return response.data;
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentType: null,
    currentCategory: null,
    currentSeries: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
    },
    breadcrumbs: [],
  },
  reducers: {
    setCurrentType: (state, action) => {
      state.currentType = action.payload;
      state.currentCategory = null;
      state.currentSeries = null;
      state.pagination.currentPage = 1;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentSeries = null;
      state.pagination.currentPage = 1;
    },
    setCurrentSeries: (state, action) => {
      state.currentSeries = action.payload;
      state.pagination.currentPage = 1;
    },
    updateBreadcrumbs: (state) => {
      state.breadcrumbs = [];
      if (state.currentType) {
        state.breadcrumbs.push({
          name: state.currentType,
          path: `/catalog/${state.currentType}`,
        });
      }
      if (state.currentCategory) {
        state.breadcrumbs.push({
          name: state.currentCategory,
          path: `/catalog/${state.currentType}/${state.currentCategory}`,
        });
      }
      if (state.currentSeries) {
        state.breadcrumbs.push({
          name: state.currentSeries,
          path: `/catalog/${state.currentType}/${state.currentCategory}/${state.currentSeries}`,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
        };
      })
      .addCase(fetchCatalogItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { 
  setCurrentType, 
  setCurrentCategory, 
  setCurrentSeries, 
  updateBreadcrumbs 
} = catalogSlice.actions;

export default catalogSlice.reducer; 