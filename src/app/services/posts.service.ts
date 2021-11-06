import { Injectable } from '@angular/core';
import {Post, posts} from "../fake-db/posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = posts

  // fakeDbMap = new Map()

  constructor() { }

  create(post: Post){
    this.posts.push({
      title: post.title,
      slug: post.slug,
      photo: post.photo,
      author: post.author
    })
  }

  // create(post:Post){
  //   this.fakeDbMap.set('title', post.title)
  //   // this.fakeDbMap.set('content', post.content)
  //   this.fakeDbMap.set('author', post.author)
  //   // this.fakeDbMap.set('slug', post.slug)
  //
  // }
}
