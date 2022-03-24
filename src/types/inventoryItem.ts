import { CollectionCard, RequestStatus } from "./index";

export interface ActiveItem {
  id: string;
}

export interface InventoryItem extends RequestStatus {
  item: CollectionCard;
}
