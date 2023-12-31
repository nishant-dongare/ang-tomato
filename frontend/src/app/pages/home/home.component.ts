import { Component, OnInit } from '@angular/core';
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
  constructor(private fs: FoodService, private activatedRoute: ActivatedRoute) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        foodsObservable = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag'] && params['tag'] != 'All') {
        foodsObservable = this.fs.getAllFoodByTag(params['tag']);
      } else {
        foodsObservable = this.fs.getAll();
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
