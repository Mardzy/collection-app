import { Card, RequestStatus } from ".";

export interface ProductDB extends RequestStatus {
  items: Card[];
}
