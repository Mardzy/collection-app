import {
  Action,
  configureStore,
  combineReducers,
  ThunkAction,
  Reducer
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import logger from "redux-logger";

import {
  ActiveItem,
  Filters,
  Inventory,
  InventoryItem,
  ProductDB,
  UserProps
} from "@types";

import activeItem from "../slices/activeItem";
import collectionItem from "../slices/inventoryItem";
import filters from "../slices/filters";
import inventory from "../slices/inventory";
import productDB from "../slices/productDB";
import user from "../slices/user";

interface RootReducer {
  activeItem: Reducer<ActiveItem>;
  collectionItem: Reducer<InventoryItem>;
  filters: Reducer<Filters>;
  inventory: Reducer<Inventory>;
  productDB: Reducer<ProductDB>;
  user: Reducer<UserProps>;
}

export const rootReducer: RootReducer = {
  activeItem,
  collectionItem,
  filters,
  inventory,
  productDB,
  user
};

const persistConfig = {
  key: "root",
  storage
};
const reducers = combineReducers(rootReducer);
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
