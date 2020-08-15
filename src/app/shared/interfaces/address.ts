import { Coordinates } from './coordinates';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Coordinates;
}
