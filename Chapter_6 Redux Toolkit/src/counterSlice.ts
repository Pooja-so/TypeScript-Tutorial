import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

/*----------------------- Slice ----------------------------- */
export interface stateType {
  count: number;
}
const initialState: stateType = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement, incrementByValue } = countSlice.actions;