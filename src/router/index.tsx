import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddToCollection, Collection, CollectionItem, Home } from "@containers";

export const routes = {
  home: { to: "/", title: "Home" },
  addToCollection: { to: "/collection/add-item", title: "Add to Collection" },
  collectionItem: { to: "/collection/:id", title: "View Item" },
  collection: { to: "/collection", title: "View Collection" },
};

const Router = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="collection">
        <Route index element={<Collection />} />
        <Route path=":id" element={<Collection />} />
        <Route path=":id/item/:itemId" element={<CollectionItem />} />
        <Route path=":/id/item/add" element={<AddToCollection />} />
      </Route>
    </Route>
  </Routes>
);

export default Router;
