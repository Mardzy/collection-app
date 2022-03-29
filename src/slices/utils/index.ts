import { v4 } from "uuid";
import { Card } from "@types";

export const createUniqueId = () => v4() as string;

export const getUniqueCardPropList = (list: Card[], key: keyof Card) => {
  const uniques = [...new Set(list.map((item: Card) => item[key]))];
  console.log("key: ", key);
  return uniques as string[] | number[];
};
