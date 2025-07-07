import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import userSlice from './user-slice/user-slice';
import coachSlice from './coach-slice/coach-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    coach: coachSlice,
  },
});
