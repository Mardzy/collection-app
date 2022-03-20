import React from "react";
import { Box, Typography } from "@mui/material";
import { FilterItem } from "components/complex/FilterList/components";

const FilterList = () => (
  <Box mt={5} width={1}>
    <Typography width={1}>Filters</Typography>
    <FilterItem details="year details" title="Year" />
    <FilterItem details="product details" title="Products" />
    <FilterItem details="product details" title="Insert" />
    <FilterItem details="product details" title="Team" />
  </Box>
);

export default FilterList;
