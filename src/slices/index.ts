import { Reducer } from "@reduxjs/toolkit";

import activeItem from "./activeItem";
import filters from "./filters";
import collectionItem from "./inventoryItem";
import inventory from "./inventory";
import productDB from "./productDB";
import user from "./user";

import {
  ActiveItem,
  Filters,
  Inventory,
  InventoryItem,
  ProductDB,
  UserProps
} from "@types";

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

export * from "./activeItem";
export * from "./inventoryItem";
export * from "./inventory";
export * from "./productDB";
export * from "./user";
