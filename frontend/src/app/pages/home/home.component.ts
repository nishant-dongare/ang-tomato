import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    let foodList$: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        foodList$ = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag'] && params['tag'] != 'All') {
        this.fs
          .getFoodsByTag(params['tag'])
          .subscribe((i) => (this.foods = i.productList));
      } else if (fs.state().length !== 0) {
        this.foods = fs.state();
      } else {
        foodList$ = this.fs.getAll();
      }

      if (foodList$) {
        foodList$.subscribe((serverFoods) => {
          if (serverFoods) {
            fs.state.set(serverFoods);
            this.foods = serverFoods;
          }
        });
      }
    });
  }
}
