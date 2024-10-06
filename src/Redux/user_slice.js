// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Define initial state
const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

// Async thunk for user registration
// export const registerUser = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/registeruser', userData); // Adjust URL to match backend
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
      const response = await fetch('http://localhost:5000/registeruser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });

      if (!response.ok) {
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
  }
);



// Async thunk for user login
export const loginUser = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/login', credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for user logout
export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('http://localhost:5000/logout');
    return true; // Return true if logout is successful
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.User; // Adjust this if necessary
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.Userdata;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Logout user
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
