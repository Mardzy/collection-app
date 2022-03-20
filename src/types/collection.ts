import { Card, RequestStatus } from ".";

/**
 * Collection Types
 */

export interface CollectionCard extends Card {
  valueIncoming?: number;
  valueOutgoing?: number;
  dateIncoming?: Date;
  dateOutgoing?: Date;
  genre?: string;
  manufacturer?: string;
  productName?: string;
  year?: string | number;
  status?:
    | "for trade"
    | "for sale"
    | "exited collection"
    | "personal collection";
}

export interface Collection extends RequestStatus {
  collection: CollectionCard[] | [];
}
