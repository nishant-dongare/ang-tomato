import { Food } from './Food';

export class Tag {
  id!: number;
  tagname!: string;
  productList!: Food[];
}
