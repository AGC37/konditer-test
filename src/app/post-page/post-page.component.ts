import {Component, OnInit} from '@angular/core';
import {posts, Post} from "../fake-db/posts";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = String(routeParams.get('id'));
    this.post = posts.find(post => post.slug === postIdFromRoute);
  }

}
