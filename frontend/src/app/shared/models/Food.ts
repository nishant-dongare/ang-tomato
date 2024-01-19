import { Tag } from './Tag';

export class Food {
  id!: string;
  name!: string;
  price!: number;
  tags?: Tag[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string;
  cookTime!: string;
}
