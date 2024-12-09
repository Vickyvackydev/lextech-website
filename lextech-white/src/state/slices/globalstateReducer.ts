import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GlobalTypes {
  slideOpen: boolean;
  dropBox: boolean;
  selectedBlog: Object;
}
const initialState: GlobalTypes = {
  slideOpen: false,
  dropBox: false,
  selectedBlog: {},
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
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
  },
});

export const { setSlideOpen, setDropBox, setSelectedBlog } =
  GlobalSlice.actions;

export const slideOpen = (state: RootState) => state.globalstate.slideOpen;
export const dropBox = (state: RootState) => state.globalstate.dropBox;
export const selectBlog = (state: RootState) => state.globalstate.selectedBlog;

export const globalReducer = GlobalSlice.reducer;
