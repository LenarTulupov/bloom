import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDropdown {
  isDropdownOpened: boolean;
}

const initialState: IDropdown = {
  isDropdownOpened: false
}

export const dropdownSlice = createSlice({
  name: "dropdownState",
  initialState,
  reducers: {
    setIsDropdownOpened: (state, action: PayloadAction<boolean>) => {
      state.isDropdownOpened = action.payload;
    }
  }
});

export const { setIsDropdownOpened } = dropdownSlice.actions;
export default dropdownSlice.reducer;