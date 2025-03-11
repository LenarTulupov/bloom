import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IScroll {
  isScrolled: boolean;
}

const initialState: IScroll = {
  isScrolled: false
}

export const scrollSlice = createSlice({
  name: "scrollState",
  initialState,
  reducers: {
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    }
  }
})

export const { setIsScrolled } = scrollSlice.actions;
export default scrollSlice.reducer;