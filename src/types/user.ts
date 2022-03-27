import { RequestStatus } from "./index";

interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  postcode: string | number;
}

export interface User {
  id: string;
  email: string;
  gender: string;
  phone_number: string;
  birthdate: string;
  location: Location;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  title: string;
  picture: string;
}

export interface UserProps extends RequestStatus {
  data: User;
}
