import { ReactText } from "react";

import { Card } from "./common";

export interface FilterItems {
  key: keyof Card;
  list: (string | number)[];
}

export interface Filters {
  items: FilterItems[];
  activeFilters: ReactText[];
  results: Card[];
}
