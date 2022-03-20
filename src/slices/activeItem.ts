import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import mockData from "./mocks/collection.json";

import { Collection, CollectionCard, CollectionItem } from "@types";

const initialState: CollectionItem = {
  item: {},
  error: null,
  status: "idle",
};

export const getActiveItem = createAsyncThunk(
  "activeItem/getActiveItem",
  async (args: { userId: string; id: string }, { rejectWithValue }) => {
    try {
      const { collection }: Collection = JSON.parse(JSON.stringify(mockData));
      const activeItem = collection.find(
        ({ id, owner }) => id === args.id && owner === args.userId
      );

      return activeItem as CollectionCard;
      // replace with fetchCollectionItem request
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const updateCollectionItem = createAsyncThunk(
  "activeItem/updateCollectionItem",
  async (item: CollectionCard, { rejectWithValue }) => {
    // const res = baseApi.updateCollectionItem()
    try {
      console.log(item);
      // add put request to update item
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    switchActiveItem: (state, { payload }: PayloadAction<CollectionCard>) => {
      state.item = payload;
    },
  },
  extraReducers: {
    [getActiveItem.pending.type]: (state) => {
      state.status = "pending";
    },
    [getActiveItem.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CollectionCard>
    ) => {
      state.status = "fulfilled";
      state.item = payload;
    },
    [getActiveItem.rejected.type]: (state, payload) => {
      state.status = "rejected";
      state.error = payload.errorMessage;
    },
    [updateCollectionItem.pending.type]: (state) => {
      state.status = "pending";
    },
    [updateCollectionItem.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CollectionCard>
    ) => {
      state.status = "fulfilled";
      state.item = payload;
    },
    [updateCollectionItem.rejected.type]: (state, payload) => {
      state.status = "rejected";
      state.error = payload.errorMessage;
    },
  },
});

export default activeItemSlice.reducer;
