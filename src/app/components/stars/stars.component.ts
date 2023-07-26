import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: [],
})
export class StarsComponent {
  starArray: number[] = [1, 2, 3, 4, 5];
  @Input() count: number = 0;
}
