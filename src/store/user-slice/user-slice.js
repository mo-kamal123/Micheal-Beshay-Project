import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: 'ahmed',
  email: 'ahmed@gmail.com',
  phone: '01012345678',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
