import { Injectable } from '@angular/core';
import {categoryPosts, Navigation} from '../fake-db/navigation';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryPosts = categoryPosts

  constructor() { }

  create(categoryPosts: Navigation){
    this.categoryPosts.push({
      title: categoryPosts.title,
      slug: categoryPosts.slug,
      description: categoryPosts.description,
      mainCategory: categoryPosts.mainCategory,
    })
  }
}
