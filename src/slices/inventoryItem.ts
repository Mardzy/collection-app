import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  CaseReducer
} from "@reduxjs/toolkit";

import { inventoryItems } from "./mocks";

import { CollectionCard, InventoryItem, Status } from "@types";

const initialState: InventoryItem = {
  status: Status["IDLE"],
  error: "",
  item: ({} as unknown) as CollectionCard
};

const clearInventoryItem: CaseReducer<InventoryItem> = (state) => {
  state.status = Status["IDLE"];
  state.item = ({} as unknown) as CollectionCard;
};

const setOneInventoryItem: CaseReducer<
  InventoryItem,
  PayloadAction<CollectionCard>
> = (state, { payload }) => {
  state.status = Status["FULFILLED"];
  state.item = payload;
};

export const getInventoryItem = createAsyncThunk(
  "inventory/getInventoryItem",
  async (id: string, { rejectWithValue }) => {
    try {
      // console.log("args: ", userId);
      const item = inventoryItems.find((item) => item.id === id);

      return item as CollectionCard;
    } catch (err) {
      console.log("Error: ", err);
      rejectWithValue((err as Error).message);
    }
  }
);

export const updateInventoryItem = createAsyncThunk(
  "inventory/updateInventoryItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    try {
      console.log("Update inventory Item", item);
      // put method for inventory item
    } catch (e) {
      console.log("Change Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

export const inventoryItemSlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    clearCollectionItem: clearInventoryItem,
    setOneCollectionItem: setOneInventoryItem
  },
  extraReducers: {
    [getInventoryItem.pending.type]: (state: InventoryItem) => {
      state.status = Status["PENDING"];
    },
    [getInventoryItem.fulfilled.type]: (
      state: InventoryItem,
      { payload }: PayloadAction<CollectionCard>
    ) => {
      state.status = Status["FULFILLED"];
      state.item = payload;
    },
    [getInventoryItem.rejected.type]: (state: InventoryItem, payload) => {
      state.status = Status["REJECTED"];
      state.error = payload.errorMessage;
    }
  }
});

export { clearInventoryItem, setOneInventoryItem };
export default inventoryItemSlice.reducer;
