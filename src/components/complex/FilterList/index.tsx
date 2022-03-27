import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { FilterItem } from "./components";

import { useAppDispatch } from "@hooks";
import { getDBItemsPropListSelector } from "@selectors";
import { setUniqueCardPropList } from "@slices";

import { Card } from "@types";

const FilterList = () => {
  const dispatch = useAppDispatch();
  const yearsList = getDBItemsPropListSelector("years") as string[];

  const handleFilterItemClick = (prop: keyof Card) => {
    console.log("click", prop);
    dispatch(setUniqueCardPropList(prop));
  };

  return (
    <Box mt={5} width={1}>
      <Typography width={1}>Filters</Typography>
      <FilterItem
        details={
          <>
            {yearsList &&
              yearsList.map((year: string, i: number) => {
                return (
                  <Button
                    variant="text"
                    key={i}
                    onClick={() => {
                      console.log(year, "click");
                    }}
                  >
                    {year}
                  </Button>
                );
              })}
          </>
        }
        handleClick={() => handleFilterItemClick("year")}
        title="Year"
      />
      <FilterItem details="product details" title="Products" />
      <FilterItem details="insert details" title="Insert" />
      <FilterItem details="team details" title="Team" />
    </Box>
  );
};

export default FilterList;
