import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import userSlice from './user-slice/user-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
