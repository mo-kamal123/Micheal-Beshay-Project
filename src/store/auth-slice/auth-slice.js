import { createSlice } from '@reduxjs/toolkit';
import { changeStorage, getFromStorage, removeItem } from '../../utils/change-local-storage';

const loggedIn = getFromStorage('loggedIn') || false; // Default value for loggedIn is false if not found in local storage
const initialState = { loggedIn };
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Toggles the loggedIn state.
     * If currently logged in, it removes 'loggedIn' from local storage and sets state to false.
     * If currently logged out, it adds 'loggedIn' to local storage and sets state to true.
     */
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
