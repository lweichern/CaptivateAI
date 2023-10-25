import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./slices/style-slice";
import emojiReducer from "./slices/emoji-slice";
import wordLimitReducer from "./slices/wordLimit-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { styleReducer, emojiReducer, wordLimitReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
