import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GlobalTypes {
  slideOpen: boolean;
  dropBox: boolean;
}
const initialState: GlobalTypes = {
  slideOpen: false,
  dropBox: false,
};
export const GlobalSlice = createSlice({
  initialState,
  name: "globalstate",
  reducers: {
    setSlideOpen: (state, action: PayloadAction<boolean>) => {
      state.slideOpen = action.payload;
    },
    setDropBox: (state, action: PayloadAction<boolean>) => {
      state.dropBox = action.payload;
    },
  },
});

export const { setSlideOpen, setDropBox } = GlobalSlice.actions;

export const slideOpen = (state: RootState) => state.globalstate.slideOpen;
export const dropBox = (state: RootState) => state.globalstate.dropBox;

export const globalReducer = GlobalSlice.reducer;
