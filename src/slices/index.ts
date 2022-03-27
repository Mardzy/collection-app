import activeItem from "./activeItem";
import collectionItem from "./inventoryItem";
import inventory from "./inventory";
import productDB from "./productDB";
import user from "./user";

export const rootReducer = {
  activeItem,
  collectionItem,
  inventory,
  productDB,
  user
};

export * from "./activeItem";
export * from "./inventoryItem";
export * from "./inventory";
export * from "./productDB";
export * from "./user";
