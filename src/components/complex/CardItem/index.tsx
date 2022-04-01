import React, { FC } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  FavoriteBorder as FavoriteIcon,
  SyncAlt as TradeIcon,
  ZoomIn as ZoomInIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Flex } from "@components";

import { Card as CardProps, CollectionCard } from "@types";
import { useAppDispatch } from "@hooks";
import { setActiveItem } from "@slices";

interface CardItemProps {
  card: CardProps | CollectionCard;
  shouldNavigate?: boolean;
}

const imagePlaceholder = "http://placekitten.com/300/400";

/**
 * @todo dry up code
 * @param props
 * @constructor
 */
const CardItem: FC<CardItemProps> = ({ card, shouldNavigate }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Card sx={{ padding: "10px", paddingBottom: 0, cursor: "pointer" }}>
      {!!shouldNavigate ? (
        <CardMedia
          onClick={() => {
            dispatch(setActiveItem(card.id as string));
            navigate(`item/${card.id}`);
          }}
          sx={{
            boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.47)"
          }}
          component="img"
          image={imagePlaceholder}
          alt="place kitten"
        />
      ) : (
        <CardMedia
          sx={{
            boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.47)"
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
        {shouldNavigate ? (
          <>
            <Typography
              onClick={() => {
                dispatch(setActiveItem(card.id as string));
                navigate(`item/${card.id}`);
              }}
              variant="body1"
            >
              {card.description}
            </Typography>
            {card.productName ?? (
              <Typography variant="body2" color="text.secondary">
                {card.productName}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {card.setName} - {card?.cardId}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">{card.description}</Typography>
            {card.productName ?? (
              <Typography variant="body2" color="text.secondary">
                {card.productName}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {card.setName} - {card.cardId}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CardItem;
