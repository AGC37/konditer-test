import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../fake-db/posts";
import {categoryPosts} from "../../fake-db/navigation";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup
  navigation = categoryPosts

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var post = this.postsService.getBySlug(params['id'])
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        slug: new FormControl(post.slug, Validators.required),
        description: new FormControl(post.description, Validators.maxLength(355)),
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
      description: this.form.value.description,
      content: this.form.value.text,
      photo: this.form.value.cover,
      author: this.form.value.author,
    }

    this.postsService.updatePost(post)
    this.form.reset()
    this.router.navigate(['/admin'])
    console.log(this.postsService.posts)
  }

}
