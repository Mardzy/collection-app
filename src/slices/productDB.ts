import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { productDB } from "./mocks";

import { Status, ProductDB, Card } from "@types";
import { getUniqueCardPropList } from "./utils";

const initialState: ProductDB = {
  status: Status["IDLE"],
  error: "",
  items: ([] as unknown) as Card[]
};

export const getDBItems = createAsyncThunk(
  "productDB/getDBItems",
  async (userId: string | undefined, { rejectWithValue }) => {
    try {
      const response: Card[] = productDB;
      return response;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const { actions, reducer } = createSlice({
  name: "productDB",
  initialState,
  reducers: {
    clearDBItems: (state: ProductDB) => {
      state.status = Status["IDLE"];
      state.items = ([] as unknown) as Card[];
    }
  },
  extraReducers: {
    [getDBItems.pending.type]: (state: ProductDB) => {
      state.status = Status["PENDING"];
    },
    [getDBItems.fulfilled.type]: (
      state: ProductDB,
      { payload }: PayloadAction<Card[]>
    ) => {
      state.status = Status["FULFILLED"];
      state.items = payload;
    },
    [getDBItems.rejected.type]: (state: ProductDB, payload) => {
      state.status = Status["REJECTED"];
      state.error = payload.errorMessage;
    }
  }
});

export const { clearDBItems } = actions;

export default reducer;
