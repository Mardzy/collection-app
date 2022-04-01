import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Card, FilterItems, Filters } from "@types";
import { ReactText } from "react";

const initialState: Filters = {
  items: ([] as unknown) as FilterItems[],
  activeFilters: ([] as unknown) as Filters["activeFilters"],
  results: ([] as unknown) as Card[]
};

interface SetFilterItemsListProps {
  filterItemKeys: string[];
  itemList: Card[];
}

const { actions, reducer } = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearActiveFilters: (state: Filters) => {
      state.activeFilters = [];
    },
    clearFilterItemsList: (state: Filters) => {
      state.items = [];
      state.activeFilters = [];
    },
    addActiveFilter: (
      state: Filters,
      { payload }: PayloadAction<ReactText>
    ) => {
      state.activeFilters?.push(payload);
    },
    removeActiveFilter: (
      state: Filters,
      { payload }: PayloadAction<ReactText>
    ) => {
      state.activeFilters = state.activeFilters?.filter((i) => i !== payload);
    },
    setFilterItemsList: (
      state: Filters,
      {
        payload: { filterItemKeys, itemList }
      }: PayloadAction<SetFilterItemsListProps>
    ) => {
      const mappedList = filterItemKeys.map((key) => {
        const newKey = key as keyof Card;
        const filterItemValues = itemList.map((card: Card) => {
          return card[newKey] as string | number;
        });

        const uniqueList: (string | number)[] = [...new Set(filterItemValues)];
        return { key: newKey, list: uniqueList };
      });

      state.items = mappedList as FilterItems[];
    },
    getFilteredResults: (
      state: Filters,
      { payload }: PayloadAction<Card[]>
    ) => {
      const results = payload.filter((item) => {
        const keys = Object.keys(item);

        for (let i = 0; i < keys.length; i++) {
          const indexKey = keys[i] as keyof Card;
          const itemValue = item[indexKey] as string;
          const matchingValue = state.activeFilters?.find(
            (i) => i === itemValue
          );

          if (itemValue === matchingValue && !!itemValue && !!matchingValue) {
            return item;
          }
        }
      });

      return {
        ...state,
        results
      };
    }
  }
});

export const {
  addActiveFilter,
  clearActiveFilters,
  clearFilterItemsList,
  getFilteredResults,
  removeActiveFilter,
  setFilterItemsList
} = actions;

export default reducer;
