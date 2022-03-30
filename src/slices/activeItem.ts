import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ActiveItem } from "@types";

const initialState: ActiveItem = {
  id: ""
};

const { actions, reducer } = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    clearActiveItem: (state: ActiveItem) => {
      state.id = "";
    },
    setActiveItem: (state: ActiveItem, { payload }: PayloadAction<string>) => {
      state.id = payload;
    }
  }
});

export const { clearActiveItem, setActiveItem } = actions;

export default reducer;
