import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  [x: string]: any;
  tags?: Tag[];
  selected!: string | number;
  constructor(
    public foodServices: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      this.selected = params['tag'] ? params['tag'] : null;
    });
  }
  ngOnInit(): void {
    this.foodServices.getAllTags().subscribe({
      next: (tags) => (this.tags = tags),
      error: (e) => console.error('Error : ' + e),
    });
  }
}
