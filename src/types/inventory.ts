import { Card, RequestStatus } from ".";

/**
 * Inventory Types
 */

export interface CollectionCard extends Card {
  valueIncoming?: number;
  valueOutgoing?: number;
  dateIncoming?: Date;
  dateOutgoing?: Date;
  status?: "for trade" | "for sale" | "exited inventory" | "personal inventory";
  id: string | number;
  owner: string;
}

export interface Inventory extends RequestStatus {
  items: CollectionCard[];
}
