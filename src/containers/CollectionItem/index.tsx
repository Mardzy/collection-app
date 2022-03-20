import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Params, useLocation, useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { getActiveItem } from "@slices";
import { RootState } from "@store";

import { CollectionCard, CollectionItem as CollectionItemType } from "@types";
interface LocationProps {
  state: {
    collectionItem: CollectionCard;
  };
}

interface CollectionItemProps {
  getActiveItem: (userId: { id: string; userId: string }) => void;
  data: CollectionItemType;
}

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC<CollectionItemProps> = ({ data, getActiveItem }) => {
  const { item, status, error } = data;
  // const  {
  //   state: { collectionItem },
  // } = useLocation() as LocationProps;
  const location = useLocation() as LocationProps;
  const { id } = useParams() as Readonly<Params>;
  // if !collectionItem, use selector to get collection item from redux store
  // if no redux store get item from db
  console.log(error);
  useEffect(() => {
    if (status === "idle" && !!id) {
      getActiveItem({
        userId: "me",
        id,
      });
    }
  }, [location.state.collectionItem]);

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h4">Collection Item</Typography>
      <CardItem {...item} />
    </Flex>
  );
};

const mapStateToProps = ({ activeItem }: RootState) => ({
  data: activeItem,
});

const mapDispatchToProps = {
  getActiveItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
