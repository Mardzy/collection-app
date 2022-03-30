export interface FilterItems {
  descriptions?: string[];
  teamCities?: string[];
  teamNames?: string[];
  rookies?: string[];
  autos?: string[];
  memorabilia?: string[];
  serialNumbered?: string[];
  setNames?: string[];
  cardThicknesses?: number[];
  odds?: string[];
  genres?: string[];
  manufacturers?: string[];
  productNames?: string[];
  years?: string[];
}

export interface Filters {
  items: FilterItems;
  active: (string | number)[];
}
