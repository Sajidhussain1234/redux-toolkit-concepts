import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 0,
};

// async call
// for async call first we need to start json server by executing command in terminal: json-server db.json -p 8080
export const getUserById = createAsyncThunk(
  "account/getUser",
  async (userId) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);

//accontSlice is as same as reducer name in pure redux
export const accountSlice = createSlice({
  // name: "account" is same as action constant (action type) in pure redux
  name: "account",
  initialState,
  reducers: {
    // increment is actually a function which is as same as action creator in pure redux
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserById.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
