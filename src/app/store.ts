import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import activeItemReducer from "../slices/activeItem";
import inventory from "../slices/inventory";
import collectionItem from "../slices/inventoryItem";
import user from "../slices/user";

export const store = configureStore({
  reducer: {
    activeItem: activeItemReducer,
    inventory,
    collectionItem,
    user
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
