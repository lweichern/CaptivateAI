import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const wordLimit = createSlice({
  name: "wordLimit",
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

export const { clear, update } = wordLimit.actions;
export default wordLimit.reducer;
