import { Component, effect } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity: number = 0;
  constructor(cartService: CartService) {
    effect(() => {
      this.cartQuantity = cartService.cart().totalCount;
      // console.log();
    });
  }
}
