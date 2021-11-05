import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {categoryPosts, Navigation} from "../../fake-db/navigation";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup
  navigation = categoryPosts

  constructor(private catygoryService: CategoryService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      slug: new FormControl(null, [Validators.required, Validators.pattern("[a-z0-9-]*")]),
      mainCategory: new FormControl(null),
      description: new FormControl(null)
    })
  }

  submit(){
    if (this.form.invalid){
      return
    }

    const category: Navigation = {
      title: this.form.value.title,
      slug: this.form.value.slug,
      description: this.form.value.description,
      mainCategory: this.form.value.description
    }

    this.catygoryService.create(category)
    this.form.reset()

  }

}
