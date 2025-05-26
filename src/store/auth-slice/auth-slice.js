import { createSlice } from '@reduxjs/toolkit';
import { changeStorage, getFromStorage, removeItem } from '../../utils/change-local-storage';

const loggedIn = getFromStorage('loggedIn') || false;
const initialState = { loggedIn };
console.log(initialState.loggedIn);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      if (loggedIn) {
        removeItem('loggedIn');
        state.loggedIn = false;
      } else {
        changeStorage('loggedIn', 'true');
        state.loggedIn = true;
      }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
