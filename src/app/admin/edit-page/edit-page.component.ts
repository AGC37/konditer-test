import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {Post} from "../../fake-db/posts";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var post = this.postsService.getBySlug(params['id'])
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        slug: new FormControl(post.slug, Validators.required),
        description: new FormControl(null, Validators.maxLength(355)),
        meta_description: new FormControl(null, Validators.maxLength(355)),
        text: new FormControl(post.content),
        author: new FormControl(post.author, Validators.maxLength(50)),
        cover: new FormControl(post.photo),
      })
      console.log(this.postsService.getBySlug(params['id']))
    })

  }

  submit() {
    if (this.form.invalid) {
      console.log(this.form.invalid)
      return
    }

    const post: Post = {
      title: this.form.value.title,
      slug: this.form.value.slug,
      content: this.form.value.text,
      photo: this.form.value.cover,
      author: this.form.value.author,
    }

    this.postsService.updatePost(post)
    this.form.reset()
    console.log(this.postsService.posts)
  }

}
