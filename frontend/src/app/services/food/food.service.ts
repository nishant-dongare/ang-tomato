import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from 'src/app/shared/constants/urls';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private InitialFoodlist$!: Observable<Food[]>;
  state = signal<Food[]>([]);
  flag:boolean = false;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    if(this.InitialFoodlist$){
      this.InitialFoodlist$.pipe(tap(arr=>{if(arr.length == 0){this.flag = true;}}))
    }else{
      this.flag=true;
    }
    
    if(this.flag){
      this.flag=!this.flag;
      this.InitialFoodlist$=this.http.get<Food[]>(FOODS_URL);
    }
    return this.InitialFoodlist$;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getFoodsByTag(tag: string): Observable<Tag> {
    return this.http.get<Tag>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}
