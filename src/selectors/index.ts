import { useAppSelector } from "../hooks";

export const getActiveItemSelector = (id: string) =>
  useAppSelector(({ inventory: { items } }) =>
    items.find((item) => item.id === id)
  );
