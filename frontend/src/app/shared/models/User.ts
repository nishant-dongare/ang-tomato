import { Food } from './Food';

export class User {
  id!: string;
  email!: string;
  name!: string;
  address!: string;
  token!: string;
  productList!: Food[];
}
