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

export const productDBSlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    clearDBItems: (state: ProductDB) => {
      state.status = Status["IDLE"];
      state.items = ([] as unknown) as Card[];
    },
    setUniqueCardPropList: (
      state: ProductDB,
      { payload }: PayloadAction<keyof Card>
    ) => {
      state.status = Status["IDLE"];
      const uniques = getUniqueCardPropList(state.items, payload as keyof Card);
      switch (payload) {
        case "year": {
          state.years = uniques;
          break;
        }
        case "description": {
          state.descriptions = uniques as string[];
          break;
        }
        case "teamCity": {
          state.teamCities = uniques as string[];
          break;
        }
        case "teamName": {
          state.teamNames = uniques as string[];
          break;
        }
        case "memorabilia": {
          state.memorabilia = uniques as string[];
          break;
        }
        case "serialNumbered": {
          state.serialNumbered = uniques;
          break;
        }
        case "setName": {
          state.setNames = uniques as string[];
          break;
        }
        case "cardThickness": {
          state.cardThicknesses = uniques as number[];
          break;
        }
        case "odds": {
          state.odds = uniques as string[];
          break;
        }
        case "genre": {
          state.genres = uniques as string[];
          break;
        }
        case "manufacturer": {
          state.manufacturers = uniques as string[];
          break;
        }
        case "productName": {
          state.productNames = uniques as string[];
          break;
        }
        default:
          console.log("Wrong key provided", payload);
      }
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

export const { clearDBItems, setUniqueCardPropList } = productDBSlice.actions;

export default productDBSlice.reducer;
