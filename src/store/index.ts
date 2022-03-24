import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { rootReducer } from "@slices";

// const middleware =
//   process.env.NODE_ENV == "production" ? [thunk] : [thunk, logger];
//
// const persistConfig = {
//   key: "root",
//   storage
// };

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
