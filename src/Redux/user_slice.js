import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk to fetch data from the backend
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await axios.get('http://localhost:5000/api/data'); 
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',                 // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
