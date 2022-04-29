import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { inventoryItems } from "./mocks";
// import { createUniqueId } from "./utils";

import { Inventory, CollectionCard, Status } from "@types";
const initialState: Inventory = {
  status: Status["IDLE"],
  error: "",
  items: ([] as unknown) as CollectionCard[]
};

export const getInventory = createAsyncThunk(
  "inventory/getInventory",
  async (userId: string | undefined, { rejectWithValue }) => {
    try {
      const response: CollectionCard[] = inventoryItems;

      return response as CollectionCard[];
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const addInventoryItem = createAsyncThunk(
  "inventory/addInventoryItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    try {
      console.log("Update inventory Item", item);
      // post method for inventory
    } catch (e) {
      console.log("Add Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

export const updateInventoryItem = createAsyncThunk(
  "inventory/updateInventoryItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    try {
      console.log("Update inventory Item", item);
      // patch method for inventory
    } catch (e) {
      console.log("Add Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

export const removeInventoryItem = createAsyncThunk(
  "inventory/removeInventoryItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    try {
      console.log("Update inventory Item", item);
      // put method for inventory item transaction
      // post method for transaction
    } catch (e) {
      console.log("Change Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    clearInventory: (state: Inventory) => {
      state.status = Status["IDLE"];
      state.items = ([] as unknown) as CollectionCard[];
    }
  },
  extraReducers: {
    [getInventory.pending.type]: (state: Inventory) => {
      state.status = Status["PENDING"];
    },
    [getInventory.fulfilled.type]: (
      state: Inventory,
      { payload }: PayloadAction<CollectionCard[]>
    ) => {
      state.status = Status["FULFILLED"];
      state.items = payload;
    },
    [getInventory.rejected.type]: (state: Inventory, payload) => {
      state.status = Status["REJECTED"];
      state.error = payload.errorMessage;
    }
  }
});

export const { clearInventory } = actions;

export default reducer;
