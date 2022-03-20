import React, { FC } from "react";
import { CollectionCard } from "@types";

import { LinkWithState } from "@components";

import { routes } from "@router";

interface LinkToCollectionItemProps extends CollectionCard {
  children: React.ReactNode;
}

export const LinkToCollectionItem: FC<LinkToCollectionItemProps> = (props) => (
  <LinkWithState
    to={routes.collectionItem.to.replace(":id", props.id as string)}
    state={{ collectionItem: props }}
  >
    {props.children}
  </LinkWithState>
);
