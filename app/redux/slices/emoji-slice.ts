import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

export const emoji = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
    update: (_, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { clear, update } = emoji.actions;
export default emoji.reducer;
