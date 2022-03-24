import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddToCollection, Collection, CollectionItem, Home } from "@containers";

export const routes = {
  home: { to: "/", title: "Home" },
  addToCollection: {
    to: "collection/:userId/add-item",
    title: "Add to Inventory"
  },
  collectionItem: { to: "item/:id", title: "View Item" },
  collection: { to: "collection/:userId", title: "View Collection" },
  marketplace: { to: "marketplace", title: "View Marketplace" }
};

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="collection/:id" element={<Collection />} />
    <Route path="collection/:id/add-item" element={<AddToCollection />} />
    <Route path="collection/:id/item/:itemId" element={<CollectionItem />} />
  </Routes>
);

export default Router;
