import React, { FC, ReactText } from "react";
import { Box, Button, Typography } from "@mui/material";
import _ from "lodash";

import { FilterItem } from "@components";

import { setUniqueCardPropList } from "@slices";
import { Card } from "@types";
import { useAppDispatch } from "@hooks";

export interface FilterItemProps {
  key: keyof Card;
  filterItemsList: string[] | undefined;
}

interface FilterListProps {
  filterItems: FilterItemProps[];
  handleFilterItemClick: (prop: keyof Card) => void;
}

const FilterList: FC<FilterListProps> = ({
  filterItems,
  handleFilterItemClick
}) => {
  const dispatch = useAppDispatch();

  return (
    <Box mt={5} width={1}>
      <Typography width={1}>Filters</Typography>
      {filterItems?.map(
        ({ key, filterItemsList }: FilterItemProps, index: number) => (
          <FilterItem
            key={index}
            details={
              <>
                {filterItemsList?.map((value: ReactText, i: number) => (
                  <Button
                    variant="text"
                    key={i}
                    onClick={() => handleFilterItemClick(value as keyof Card)}
                  >
                    {value}
                  </Button>
                ))}
              </>
            }
            handleClick={() => {
              dispatch(setUniqueCardPropList(key));
            }}
            title={_.startCase(_.camelCase(key)) as string}
          />
        )
      )}
    </Box>
  );
};

export default FilterList;
