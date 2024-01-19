import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodServices: FoodService) {
    foodServices.getAllTags().subscribe({
      next: (serverTags) => (this.tags = serverTags),
      error: (e) => console.error(e),
    });
  }
}
