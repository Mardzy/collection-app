import { v4 } from "uuid";
import { Card } from "@types";

export const createUniqueId = () => v4() as string;

export const getUniqueCardPropList = (list: Card[], prop: keyof Card) => {
  const uniques = [...new Set(list.map((item: Card) => item[prop]))];

  return uniques as string[] | number[];
};
