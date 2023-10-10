import { Injectable, signal } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private initialCart = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  };
  cart = signal<Cart>(this.getCartFromStorage());

  addToCart(food: Food): void {
    let cartItem = this.cart().items.find((item) => item.food.id === food.id);
    if (cartItem) {
      return;
    }
    this.cart.mutate((value) => value.items.push(new CartItem(food)));
    this.storeCart();
  }

  removeFromCart(foodId: string): void {
    this.cart.mutate(
      (value) =>
        (value.items = value.items.filter((item) => item.food.id != foodId))
    );
    // console.log(this.cart().items.filter((item) => item.food.id != foodId));
    this.storeCart();
  }

  changeQuantity(foodId: string, quantity: number): void {
    let cartItem = this.cart().items.find((item) => item.food.id == foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    console.log('Service : ' + cartItem.quantity);
    this.storeCart();
  }

  clearCart(): void {
    this.cart.set(this.initialCart);
    this.storeCart();
  }

  private storeCart(): void {
    let totalPrice = this.cart().items.reduce(
      (prev, currentItem) => prev + currentItem.price,
      0
    );
    let totalQuantity = this.cart().items.reduce(
      (prev, currentItem) => prev + currentItem.quantity,
      0
    );
    this.cart.mutate((val) => {
      val.totalPrice = totalPrice;
      val.totalCount = totalQuantity;
    });
    const jsonCart = JSON.stringify(this.cart());
    localStorage.setItem('Cart', jsonCart);
  }

  private getCartFromStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : this.initialCart;
  }
}
