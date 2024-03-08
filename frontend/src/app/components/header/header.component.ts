import { Component, effect } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity: number = 0;
  user!: User;

  constructor(cartService: CartService, private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
    effect(() => {
      this.cartQuantity = cartService.cart().totalCount;
    });
  }

  get Auth() {
    return this.user.name;
  }

  logout() {
    this.userService.logout();
  }
}
