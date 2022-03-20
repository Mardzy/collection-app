import { CollectionCard, RequestStatus } from "./index";

export interface CollectionItem extends RequestStatus {
  item: CollectionCard | {};
}
