import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { authApi } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(authApi.signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authApi.signup.rejected, (_, action) => {
        Notify.failure(action.payload);
      })
      .addCase(authApi.login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authApi.login.rejected, (_, action) => {
        Notify.failure(action.payload);
      })
      .addCase(authApi.logout.pending, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authApi.logout.rejected, (_, action) => {
        Notify.failure(action.payload);
      })
      .addCase(authApi.refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authApi.refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authApi.refresh.rejected, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        Notify.failure(action.payload);
      });
  },
});

export default authSlice.reducer;
