import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  starArray: number[] = [1, 2, 3, 4, 5];
  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.foods = this.fs.getAll();
  }
}
