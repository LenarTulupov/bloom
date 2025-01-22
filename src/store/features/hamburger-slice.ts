import { createSlice } from "@reduxjs/toolkit";

interface IHamburgerSlice {
  isHamburgerOpened: boolean;
}

const initialState: IHamburgerSlice = {
  isHamburgerOpened: false
}

const hamburgerSlice = createSlice({
  name: "hamburgerState",
  initialState,
  reducers: {
    hamburgerState: (state) => {
      state.isHamburgerOpened = !state.isHamburgerOpened
    }
  }
});

export const { hamburgerState } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;