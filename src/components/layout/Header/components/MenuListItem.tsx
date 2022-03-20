import React, { FC, ReactElement } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface MenuListItemProps {
  children: ReactElement;
  to: string;
  title: string;
}

const MenuListItem: FC<MenuListItemProps> = ({ children, to, title }) => (
  <Link to={to}>
    <ListItem button sx={{ display: "flex", justifyContent: "space-between" }}>
      <ListItemText primary={title} />
      <ListItemIcon sx={{ display: "flex", justifyContent: "flex-end" }}>
        {children}
      </ListItemIcon>
    </ListItem>
  </Link>
);

export default MenuListItem;
