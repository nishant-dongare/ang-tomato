import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  destroy$ = new Subject<boolean>();

  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    let foodList$: Observable<Food[]>;
    activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params['searchTerm']) {
        foodList$ = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag'] && params['tag'] != 'All') {
        this.fs
          .getFoodsByTag(params['tag']).pipe(takeUntil(this.destroy$))
          .subscribe((i) => (this.foods = i.productList));
      } else if (fs.state().length !== 0) {
        this.foods = fs.state();
      } else {
        foodList$ = this.fs.getAll();
        foodList$.pipe(
          takeUntil(this.destroy$)
        ).subscribe((serverFoods) => {
          if (serverFoods) {
            this.foods = serverFoods;
            fs.state.set(serverFoods);
          }
        });
      }
    });
  }

  ngOnDestroy(){
    this.destroy$.next(true);
  }
}
