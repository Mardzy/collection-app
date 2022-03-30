import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Card, FilterItems, Filters } from "@types";
import { getUniqueCardPropList } from "./utils";
import { RootState, store } from "@store";

const initialState: Filters = {
  items: ({} as unknown) as FilterItems,
  active: ([] as unknown) as Filters["active"]
};

const {
  reducer,
  actions: {
    clearActiveFilters,
    clearFilterItemsList,
    setActiveFilters,
    setFilterItemsList
  }
} = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearActiveFilters: (state: Filters) => {
      state.active = [];
    },
    clearFilterItemsList: (state: Filters) => {
      state.items = {};
      state.active = [];
    },
    setActiveFilters: (
      state: Filters,
      { payload }: PayloadAction<string | number>
    ) => {
      state.active.push(payload);
    },
    setFilterItemsList: (
      state: Filters,
      { payload }: PayloadAction<keyof Card>
    ) => {
      const { productDB }: RootState = store.getState();
      const uniqueValues = getUniqueCardPropList(
        productDB.items,
        payload as keyof Card
      );

      switch (payload) {
        case "description": {
          state.items.descriptions = uniqueValues as string[];
          break;
        }
        case "teamCity": {
          state.items.teamCities = uniqueValues as string[];
          break;
        }
        case "teamName": {
          state.items.teamNames = uniqueValues as string[];
          break;
        }
        case "memorabilia": {
          state.items.memorabilia = uniqueValues as string[];
          break;
        }
        case "serialNumbered": {
          state.items.serialNumbered = uniqueValues as string[];
          break;
        }
        case "setName": {
          state.items.setNames = uniqueValues as string[];
          break;
        }
        case "cardThickness": {
          state.items.cardThicknesses = uniqueValues as number[];
          break;
        }
        case "odds": {
          state.items.odds = uniqueValues as string[];
          break;
        }
        case "genre": {
          state.items.genres = uniqueValues as string[];
          break;
        }
        case "manufacturer": {
          state.items.manufacturers = uniqueValues as string[];
          break;
        }
        case "productName": {
          state.items.productNames = uniqueValues as string[];
          break;
        }
        case "year": {
          state.items.years = uniqueValues as string[];
          break;
        }
        default:
          console.log("Wrong key provided", payload);
          break;
      }
    }
  }
});

export {
  clearActiveFilters,
  clearFilterItemsList,
  setActiveFilters,
  setFilterItemsList
};

export default reducer;
