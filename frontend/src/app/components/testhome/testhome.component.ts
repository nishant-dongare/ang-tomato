import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,  Subscription, map } from 'rxjs';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-testhome',
  templateUrl: './testhome.component.html',
  styleUrls: ['./testhome.component.css']
})
export class TestHomeComponent {
  subs:Subscription;
  foodList$!: Observable<Food[]>;

  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    this.subs=activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foodList$ = this.fs.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag'] && params['tag'] != 'All') {
        this.foodList$ = this.fs
          .getFoodsByTag(params['tag']).pipe(map(i=>i.productList));
      } else {
        this.foodList$ = this.fs.getAll();
      }
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
