import React, { FC, ReactText, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";

import { FilterListItem } from "@components";

import {
  addActiveFilter,
  removeActiveFilter,
  setFilterItemsList
} from "@slices";
import { Card, CollectionCard, FilterItems, Filters } from "@types";
import { useAppDispatch } from "@hooks";
import { connect } from "react-redux";
import { RootState } from "@store";

interface FilterListProps {
  filters: Filters;
  filterItemKeys: string[];
  handleFilterItemClick?: (prop: keyof Card) => void;
  itemList: Card[] | CollectionCard[];
}

const FilterList: FC<FilterListProps> = ({
  filters,
  filterItemKeys,
  itemList
}) => {
  const dispatch = useAppDispatch();

  const isActiveFilter = (activeFiltersList: ReactText[], val: ReactText) =>
    _.includes(activeFiltersList, val);

  const handleFilterItemClick = (value: ReactText) =>
    !isActiveFilter(filters.activeFilters, value)
      ? dispatch(addActiveFilter(value as ReactText))
      : dispatch(removeActiveFilter(value as ReactText));

  useEffect(() => {
    if (!filters.items) {
      dispatch(setFilterItemsList({ filterItemKeys, itemList }));
    }
  }, [itemList, filters.items, filterItemKeys]);

  return (
    <Box mt={5} width={1}>
      <Typography width={1}>Filters</Typography>

      {filters?.items.map(({ key, list }: FilterItems, index: number) => (
        <FilterListItem
          key={index}
          details={
            <>
              {list?.map((value: ReactText, i: number) => (
                <Button
                  variant={
                    isActiveFilter(filters.activeFilters, value)
                      ? "outlined"
                      : "text"
                  }
                  key={i}
                  onClick={() => {
                    handleFilterItemClick(value);
                  }}
                >
                  {value}
                </Button>
              ))}
            </>
          }
          title={_.startCase(_.camelCase(key)) as string}
        />
      ))}
    </Box>
  );
};

const mapStateToProps = ({ filters }: RootState) => ({
  filters
});

export default connect(mapStateToProps)(FilterList);
