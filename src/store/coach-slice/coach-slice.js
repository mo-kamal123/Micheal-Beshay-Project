import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 22,
  name: 'Amanda Clara',
  description:
    'A life coach is a professional who helps individuals set and achieve personal or professional goals, improve their mindset, and create a more fulfilling life. They provide guidance and support to help clients overcome obstacles and reach their full potential.',
  price: '300',
  totalSessions: '33',
  feedback: '25',
  rate: '4.5',
};
const coachSlice = createSlice({
  name: 'coach',
  initialState,
  reducers: {
    setCoach(state, action) {
      state.coach = action.payload;
    },
  },
});

export const { setCoach } = coachSlice.actions;
export default coachSlice.reducer;
