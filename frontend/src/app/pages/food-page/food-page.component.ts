import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        var f = foodService.state().find((item) => item.id == params['id']);
        if (f != undefined) {
          this.food = f;
        }
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
