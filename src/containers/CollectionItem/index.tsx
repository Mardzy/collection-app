import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { CardItem, Flex } from "@components";

import { getInventoryAnItem } from "@slices";
import { RootState } from "@store";

import {
  ActiveItem,
  CollectionCard,
  InventoryItem as CollectionItemType
} from "@types";
import { useAppDispatch } from "@hooks";
import { getActiveItemSelector } from "@selectors";

interface CollectionItemProps {
  activeItem: ActiveItem;
  collectionItem: CollectionItemType;
}

/**
 * @todo fallback for direct navigation
 * @todo create back button
 * @constructor
 */
const CollectionItem: FC<CollectionItemProps> = ({
  activeItem: { id },
  collectionItem
}) => {
  const { item } = collectionItem;
  const params = useParams() as Readonly<{ itemId: string }>;
  const dispatch = useAppDispatch();
  const collectionCard: CollectionCard | undefined = getActiveItemSelector(id);
  const viewItem: CollectionCard = item || collectionCard;

  useEffect(() => {
    if (!item.id) {
      dispatch(getInventoryAnItem(params.itemId));
    }
  }, []);

  return (
    <>
      {!!viewItem?.id ? (
        <Flex
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          flexDirection="column"
        >
          <Typography variant="h4">Collection Item</Typography>
          <CardItem card={viewItem} />
        </Flex>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const mapStateToProps = ({ activeItem, collectionItem }: RootState) => ({
  activeItem,
  collectionItem
});

export default connect(mapStateToProps)(CollectionItem);
