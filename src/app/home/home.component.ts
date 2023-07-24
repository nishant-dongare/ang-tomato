import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  starArray: number[] = [1, 2, 3, 4, 5];
  constructor(private fs: FoodService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else {
        this.foods = this.fs.getAll();
      }
    });
  }
}
