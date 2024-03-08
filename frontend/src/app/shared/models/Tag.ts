import { Food } from './Food';

export class Tag {
  id!: number;
  tagname!: string;
  products!: Food[];
}
