import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const checkDownloadLimit = createAsyncThunk(
  'download/checkLimit',
  async () => {
    const response = await api.checkDownloadLimit();
    return response.data;
  }
);

export const trackDownload = createAsyncThunk(
  'download/track',
  async ({ productId, format }) => {
    const response = await api.trackDownload(productId, format);
    return response.data;
  }
);

const downloadSlice = createSlice({
  name: 'download',
  initialState: {
    remainingDownloads: 3,
    limitReached: false,
    loading: false,
    error: null,
  },
  reducers: {
    resetDownloadState: (state) => {
      state.remainingDownloads = 3;
      state.limitReached = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkDownloadLimit.fulfilled, (state, action) => {
        state.remainingDownloads = action.payload.remainingDownloads;
        state.limitReached = action.payload.limitReached;
      })
      .addCase(trackDownload.fulfilled, (state) => {
        if (!state.limitReached) {
          state.remainingDownloads -= 1;
          state.limitReached = state.remainingDownloads === 0;
        }
      });
  },
});

export const { resetDownloadState } = downloadSlice.actions;
export default downloadSlice.reducer; 