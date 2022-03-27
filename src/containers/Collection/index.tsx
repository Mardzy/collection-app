import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { CardItem, Flex, FilterButton } from "@components";

import { getInventory } from "@slices";
import { RootState } from "@store";
import { Inventory as CollectionType, CollectionCard } from "@types";
import { useAppDispatch } from "../../hooks";

interface CollectionProps {
  inventory: CollectionType;
}

const Collection: FC<CollectionProps> = ({ inventory: { items } }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInventory("c8a57299-82ea-4b35-be52-31d1eaa5f4b2"));
  }, []);

  return (
    <>
      {items ? (
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          flexDirection="column"
        >
          <Typography variant="h4">Personal Collection</Typography>
          <FilterButton />
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 3, md: 3 }}
            rowSpacing={2}
            mt={0.5}
          >
            {(items as CollectionCard[]).map((card: CollectionCard) => (
              <Grid key={card.id} item xs={6} sm={4} md={4} lg={2} xl={2}>
                <CardItem shouldNavigate={true} {...card} />
              </Grid>
            ))}
            {/*  load more button to integrate with fetch inventory*/}
          </Grid>
          <Outlet />
        </Flex>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

const mapStateToProps = ({ inventory }: RootState) => ({
  inventory
});

export default connect(mapStateToProps)(Collection);
