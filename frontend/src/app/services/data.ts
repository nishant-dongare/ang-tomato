import { signal } from '@angular/core';
import { Food } from '../shared/models/Food';

export const state = signal<Food[]>([]);
