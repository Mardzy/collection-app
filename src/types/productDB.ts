import { Card, RequestStatus } from ".";

export interface ProductDB extends RequestStatus {
  items: Card[];
  descriptions?: string[];
  teamCities?: string[];
  teamNames?: string[];
  rookies?: string[];
  autos?: string[];
  memorabilia?: string[];
  serialNumbered?: string[] | number[];
  setNames?: string[];
  cardThicknesses?: number[];
  odds?: string[];
  genres?: string[];
  manufacturers?: string[];
  productNames?: string[];
  years?: string[] | number[];
}
