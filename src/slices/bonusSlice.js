import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};

// this is action type to handle special case: make increment 1 in points when user increment amount by 100 or over
const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  //bonusSlice is as same as reducer name in pure redux
  name: "bonus ", // this is same as action constant (action type) in pure redux
  initialState,
  reducers: {
    increment: (state) => {
      // increment is actually a function which is as same as action creator in pure redux
      state.points += 1;
    },
  },
  // This is special case. If user enter 100 or more than 100 amount then point would also b increase by 1.
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
