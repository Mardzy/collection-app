import { useAppSelector } from "@hooks";
import { Card, ProductDB } from "@types";

export const getActiveItemSelector = (id: string) =>
  useAppSelector(({ inventory: { items } }) =>
    items.find((item) => item.id === id)
  );

// export const getDBItemsPropListSelector = (prop: keyof ProductDB) =>
//   useAppSelector(({ productDB }) => productDB[prop]) as string[] | number[];

export const getDBItemsByKeyAndValue = ({
  key,
  value
}: {
  key: keyof Card;
  value: string | number;
}) =>
  useAppSelector(({ productDB }) =>
    productDB.items.filter((item) => item[key] === value)
  );
