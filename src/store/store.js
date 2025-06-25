import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import coachSlice from './coach-slice/coach-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    coach: coachSlice,
  },
});
