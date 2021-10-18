import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppTranslitService} from "../../services/app-translit.service";
import {Post} from "../../fake-db/posts";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(public appTranslitService: AppTranslitService,
              private postsService: PostsService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      slug: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.maxLength(355)),
      meta_description: new FormControl(null, Validators.maxLength(355)),
      text: new FormControl(null),
      author: new FormControl(null, Validators.maxLength(50)),
      cover: new FormControl(null),
      // category: new FormControl(null),
      // tags: new FormControl(null),
      // is_published: new FormControl(null),
    })

  }

  submit() {
    // if (this.form.invalid) {
    //   console.log(this.form.invalid)
    //   return
    // }

    const post: Post = {
      title: this.form.value.title,
      slug: this.form.value.slug,
      photo: this.form.value.cover,
      author: this.form.value.author,

    }

    this.postsService.create(post)
    console.log(this.postsService.posts)
  }

  formGet(val) {
    return this.form.get(val)
  }

}
