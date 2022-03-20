import React, { FC, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, SwipeableDrawer } from "@mui/material";

import { toggleDrawer } from "components/utils";
import { FilterList, Flex } from "components";

const FilterButton: FC = () => {
  const [state, setState] = useState<{ right: boolean }>({
    right: false,
  });

  return (
    <>
      <Button
        sx={{
          position: "sticky",
          left: "90%",
          top: "2%",
          marginTop: "10px",
          backgroundColor: "black",
        }}
        variant="contained"
        endIcon={<FilterListIcon />}
        onClick={toggleDrawer(true, state, setState)}
      >
        Filter
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false, state, setState)}
        onOpen={toggleDrawer(true, state, setState)}
      >
        <Flex width={300}>
          <FilterList />
        </Flex>
      </SwipeableDrawer>
    </>
  );
};

export default FilterButton;
