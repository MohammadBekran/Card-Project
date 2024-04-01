import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    dark: true,
  },
  reducers: {
    onDarkModeChange: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export default darkModeSlice.reducer;

export const useDarkModeSelector = () =>
  useSelector((state) => state.darkMode.dark);

export const { onDarkModeChange } = darkModeSlice.actions;
