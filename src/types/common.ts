export interface Card {
  cardId: string;
  description: string;
  teamCity?: string;
  teamName?: string;
  rookie?: string;
  auto?: string;
  memorabilia?: string;
  serialNumbered?: number;
  setName: string;
  cardThickness?: number;
  odds?: string;
  genre: string;
  manufacturer: string;
  productName: string;
  year: string | number;
}

export enum Status {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected"
}

export interface RequestStatus {
  error: string;
  status: Status;
}
