import React, { FC, KeyboardEvent, MouseEvent } from "react";
import { Outlet } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  Apps as CollectionIcon,
  AddCircle as AddCircleIcon,
  Mail as MailIcon,
  MoveToInbox as InboxIcon
  // Storefront as StorefrontIcon,
} from "@mui/icons-material";

import { routes } from "@router";
import { Flex } from "@components";
import { MenuListItem } from "./";

interface MenuListProps {
  closeDrawer: (event: KeyboardEvent | MouseEvent) => void;
}

/**
 * Menu list for header
 * @param toggleDrawer
 * @constructor
 */
const MenuList: FC<MenuListProps> = ({ closeDrawer }) => (
  <Flex
    height="100%"
    onClick={closeDrawer}
    onKeyDown={closeDrawer}
    flexDirection="column"
    justifyContent="space-between"
  >
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
    </List>
    <List>
      {/*<MenuListItem to={routes.marketplace.to} title={routes.marketplace.title}>*/}
      {/*  <StorefrontIcon />*/}
      {/*</MenuListItem>*/}
      <MenuListItem
        to={routes.addToCollection.to.replace(
          ":userId",
          "c8a57299-82ea-4b35-be52-31d1eaa5f4b2"
        )}
        title={routes.addToCollection.title}
      >
        <AddCircleIcon />
      </MenuListItem>
      <MenuListItem
        to={routes.collection.to.replace(
          ":userId",
          "c8a57299-82ea-4b35-be52-31d1eaa5f4b2"
        )}
        title={routes.collection.title}
      >
        <CollectionIcon />
      </MenuListItem>
    </List>
    <Outlet />
  </Flex>
);

export default MenuList;
