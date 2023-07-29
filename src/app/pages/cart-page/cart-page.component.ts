import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cart = cartService.cart();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, change: boolean): void {
    if (cartItem.quantity == 1 && !change) return;
    this.cartService.changeQuantity(
      cartItem.food.id,
      change ? cartItem.quantity + 1 : cartItem.quantity - 1
    );
    console.log(cartItem.quantity);
    // console.log('Component : ' + cartItem.quantity);
  }
}
