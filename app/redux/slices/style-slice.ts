import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const style = createSlice({
  name: "style",
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
    update: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { clear, update } = style.actions;
export default style.reducer;
