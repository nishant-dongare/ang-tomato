import { CartItem } from './CartItem';

export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}
