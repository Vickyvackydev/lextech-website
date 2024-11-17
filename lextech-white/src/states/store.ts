import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./slices/globalstateReducer";

export const Store = configureStore({
  reducer: {
    globalstate: globalReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
