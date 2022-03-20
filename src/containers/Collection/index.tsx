import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { CardItem, Flex, FilterButton } from "@components";

import { getCollection } from "@slices";
import { RootState } from "@store";

import { Collection as CollectionType, CollectionCard } from "@types";

interface CollectionProps {
  getCollection: (userId: string) => void;
  data: CollectionType;
}

const Collection: FC<CollectionProps> = ({ getCollection, data }) => {
  const { error, collection, status } = data;

  useEffect(() => {
    if (status === "idle") {
      getCollection("me");
    }
  }, [collection]);
  console.log(error);
  return (
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
        {collection && (collection as CollectionCard[]).map((card: CollectionCard) => (
          <Grid key={card.id} item xs={6} sm={4} md={4} lg={2} xl={2}>
            <CardItem shouldNavigate={true} {...card} />
          </Grid>
        ))}
        {/*  load more button to integrate with fetch inventory*/}
      </Grid>
      <Outlet />
    </Flex>
  );
};

const mapStateToProps = ({ collection }: RootState) => ({
  data: collection,
});

const mapDispatchToProps = {
  getCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
