import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { state } from 'src/app/services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        foodsObservable = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag'] && params['tag'] != 'All') {
        this.fs
          .getFoodsByTag(params['tag'])
          .subscribe((i) => (this.foods = i.products));
      } else {
        foodsObservable = this.fs.getAll();
      }

      if (foodsObservable) {
        foodsObservable.subscribe((serverFoods) => {
          if (serverFoods) {
            state.set(serverFoods);
            this.foods = serverFoods;
          }
        });
      }
    });
  }
}
