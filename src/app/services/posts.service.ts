import { Injectable } from '@angular/core';
import {Post, posts} from "../fake-db/posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = posts

  create(post: Post){
    this.posts.push({
      title: post.title,
      slug: post.slug,
      content: post.content,
      photo: post.photo,
      author: post.author
    })
  }

  delete(slug: string){
    if (!window.confirm('Точно удалить?')){
      return
    }
    var id = this.posts.find(s => s.slug === slug)
    var index = posts.indexOf(id)

    if (index > -1){
      posts.splice(index, 1)
    }
  }

  getBySlug(slug: string){
    var id = this.posts.find(s => s.slug === slug)
    var index = posts.indexOf(id)

    if (index > -1){
      var tmp = this.posts[index]
    }
    return tmp
  }

}
