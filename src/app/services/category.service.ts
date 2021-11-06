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

  delete(slug: string){
    if (!window.confirm('Точно удалить?')){
      return
    }
    var id = this.categoryPosts.find(s => s.slug === slug)
    var index = categoryPosts.indexOf(id)

    if (index > -1){
      categoryPosts.splice(index, 1,)
    }
  }

  getBySlug(slug: string){
    var id = this.categoryPosts.find(s => s.slug === slug)
    var index = categoryPosts.indexOf(id)

    if (index > -1){
      var tmp = this.categoryPosts[index]
    }
    return tmp
  }

  updatePost(category: Navigation){
    let slug = category.slug
    var id = this.categoryPosts.find(s => s.slug === slug)
    var index = categoryPosts.indexOf(id)

    if (index > -1){
      categoryPosts.splice(index, 1, category)
    }
  }
}
