import collectionReducer from "./collection";
import collectionItemReducer from "./activeItem";

export const reducer = {
  collection: collectionReducer,
  activeItem: collectionItemReducer,
};

// export type RootState = ReturnType<typeof reducer>
export * from "./collection";
export * from "./activeItem";
