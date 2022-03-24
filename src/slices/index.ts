import activeItem from "./activeItem";
import collectionItem from "./inventoryItem";
import inventory from "./inventory";
import users from "./user";

export const rootReducer = {
  activeItem,
  inventory,
  collectionItem,
  users
};

export * from "./activeItem";
export * from "./inventoryItem";
export * from "./inventory";
export * from "./user";
