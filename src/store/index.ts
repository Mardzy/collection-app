import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

import { reducer } from "@slices";

const middleware =
  process.env.NODE_ENV == "production" ? [thunk] : [thunk, logger];

const reducers = combineReducers({
  ...reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
