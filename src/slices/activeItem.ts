import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ActiveItem } from "@types";

const initialState: ActiveItem = {
  id: ""
};

const {
  reducer,
  actions: { setActiveItem, clearActiveItem }
} = createSlice({
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

export { clearActiveItem, setActiveItem };

export default reducer;
