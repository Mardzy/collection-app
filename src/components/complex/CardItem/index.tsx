import React, { FC } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  FavoriteBorder as FavoriteIcon,
  SyncAlt as TradeIcon,
  ZoomIn as ZoomInIcon,
} from "@mui/icons-material";

import { Flex } from "components";
import { LinkToCollectionItem } from "./components";

import { CollectionCard } from "@types";

interface CardItemProps extends CollectionCard {
  shouldNavigate?: boolean;
}

const imagePlaceholder = "http://placekitten.com/300/400";

/**
 * @todo dry up code
 * @param props
 * @constructor
 */
const CardItem: FC<CardItemProps> = (props) => (
  <Card sx={{ padding: "10px", paddingBottom: 0, cursor: "pointer" }}>
    {!!props.shouldNavigate ? (
      <LinkToCollectionItem {...props}>
        <CardMedia
          sx={{
            boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.47)",
          }}
          component="img"
          image={imagePlaceholder}
          alt="place kitten"
        />
      </LinkToCollectionItem>
    ) : (
      <CardMedia
        sx={{
          boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.47)",
        }}
        component="img"
        image={imagePlaceholder}
        alt="place kitten"
      />
    )}
    <CardContent sx={{ paddingBottom: 0, padding: "5px" }}>
      <Flex justifyContent="space-between" mb={1} mt={0.5}>
        <FavoriteIcon fontSize="small" />
        <ZoomInIcon fontSize="small" />
        <TradeIcon fontSize="small" />
        <Typography color="green">{3}</Typography>
      </Flex>
      {props.shouldNavigate ? (
        <LinkToCollectionItem {...props}>
          <Typography variant="body1">{props.description}</Typography>
          {props.productName ?? (
            <Typography variant="body2" color="text.secondary">
              {props.productName}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {props.setName} - {props?.cardId}
          </Typography>
        </LinkToCollectionItem>
      ) : (
        <>
          <Typography variant="body1">{props.description}</Typography>
          {props.productName ?? (
            <Typography variant="body2" color="text.secondary">
              {props.productName}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {props.setName} - {props.cardId}
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default CardItem;
